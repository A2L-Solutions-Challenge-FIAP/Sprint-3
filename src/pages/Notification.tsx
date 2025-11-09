import { useState, useEffect } from "react";
import Button from "../components/Button";

interface Notificacao {
  id: string;
  paciente: string;
  medico: string;
  especialidade: string;
  dataHora: string;
  canal: "E-mail" | "WhatsApp" | "SMS";
  enviada: boolean;
}

const uid = () => Math.random().toString(36).slice(2, 9);
const agoraMais1h = () =>
  new Date(Date.now() + 60 * 60 * 1000).toISOString().slice(0, 16);

export default function Notification() {
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);
  
  const [showModal, setShowModal] = useState(false);
  const [paciente, setPaciente] = useState("");
  const [medico, setMedico] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [dataHora, setDataHora] = useState(agoraMais1h());
  const [canal, setCanal] = useState<"E-mail" | "WhatsApp" | "SMS">("E-mail");

  const total = notificacoes.length;
  const enviadas = notificacoes.filter((n) => n.enviada).length;
  const pendentes = total - enviadas;

  useEffect(() => {
  async function fetchNotificacoes() {
    try {
      const res = await fetch("http://localhost:8080/notificacoes");
      const data = await res.json();
      setNotificacoes(data);
    } catch (error) {
      console.error("Erro ao buscar notificações:", error);
    }
  }

  fetchNotificacoes();
}, []);

  function adicionar(e: React.FormEvent) {
    e.preventDefault();
    const nova: Notificacao = {
      id: uid(),
      paciente: paciente.trim(),
      medico: medico.trim(),
      especialidade: especialidade.trim(),
      dataHora,
      canal,
      enviada: false,
    };
    setNotificacoes((prev) => [nova, ...prev]);
    setShowModal(false);
    setPaciente("");
    setMedico("");
    setEspecialidade("");
    setDataHora(agoraMais1h());
    setCanal("E-mail");
  }

  function alternarEnviada(id: string) {
    setNotificacoes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, enviada: !n.enviada } : n))
    );
  }

  function excluir(id: string) {
    setNotificacoes((prev) => prev.filter((n) => n.id !== id));
  }

  return (
    <div className="relative p-8 bg-gray-50 min-h-screen">

      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Notificações</h1>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          + Adicionar Notificação
        </Button>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Pendentes</h3>
          <p className="text-3xl font-bold text-blue-700 mt-2">{pendentes}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Enviadas</h3>
          <p className="text-3xl font-bold text-green-700 mt-2">{enviadas}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Total</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{total}</p>
        </div>
      </section>

  
      <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="font-semibold text-blue-900 mb-4">Notificações recentes</h2>
        {notificacoes.length === 0 ? (
          <p className="text-gray-500 text-sm">Nenhuma notificação criada ainda.</p>
        ) : (
          <ul className="space-y-3">
            {notificacoes.map((n) => (
              <li
                key={n.id}
                className="flex justify-between items-center border border-gray-100 rounded-xl p-4 hover:bg-blue-50/50 transition"
              >
                <div>
                  <p
                    className={`font-medium ${
                      n.enviada ? "line-through text-gray-400" : "text-gray-800"
                    }`}
                  >
                    {n.paciente} — {n.especialidade}
                  </p>
                  <span className="text-xs text-gray-500">
                    {n.medico} • {n.canal} •{" "}
                    {new Date(n.dataHora).toLocaleString("pt-BR")}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => alternarEnviada(n.id)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium border transition ${
                      n.enviada
                        ? "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                        : "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200"
                    }`}
                  >
                    {n.enviada ? "Reativar" : "Marcar enviada"}
                  </button>
                  <button
                    onClick={() => excluir(n.id)}
                    className="px-3 py-1 rounded-lg text-sm font-medium text-red-600 border border-red-200 hover:bg-red-50"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

   
      {showModal && (
        <>

          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setShowModal(false)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6 relative animate-fadeIn">
              <h2 className="text-xl font-semibold text-blue-900 mb-4 text-center">
                Nova Notificação de Consulta
              </h2>

              <form onSubmit={adicionar} className="grid gap-4">
                <input
                  type="text"
                  placeholder="Nome do paciente"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={paciente}
                  onChange={(e) => setPaciente(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Nome do médico"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={medico}
                  onChange={(e) => setMedico(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Especialidade"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={especialidade}
                  onChange={(e) => setEspecialidade(e.target.value)}
                  required
                />
                <input
                  type="datetime-local"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={dataHora}
                  onChange={(e) => setDataHora(e.target.value)}
                  required
                />
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={canal}
                  onChange={(e) => setCanal(e.target.value as Notificacao["canal"])}
                >
                  <option value="E-mail">E-mail</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="SMS">SMS</option>
                </select>

                <div className="flex justify-between gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="w-1/2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
