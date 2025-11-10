import { useState, useEffect } from "react";
import Button from "../components/Button";

interface Lembrete {
  id: number;
  nomePaciente: string;
  nomeMedico: string;
  especialidade: string;
  dataEnvio: string;
  canal: "SMS" | "WHATSAPP" | "EMAIL";
  statusLembrete: "PENDENTE" | "ENVIADO" | "CONFIRMADO" | "FALHOU";
}

const uid = () => Math.floor(Math.random() * 1000000);

const agoraMais1h = () =>
  new Date(Date.now() + 60 * 60 * 1000).toISOString().slice(0, 16);

export default function Notification() {
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);

  const [showModal, setShowModal] = useState(false);
  const [nomePaciente, setNomePaciente] = useState("");
  const [nomeMedico, setNomeMedico] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [dataEnvio, setDataEnvio] = useState(agoraMais1h());
  const [canal, setCanal] = useState<"SMS" | "WHATSAPP" | "EMAIL">("EMAIL");

  const total = lembretes.length;
  const enviados = lembretes.filter(
    (n) => n.statusLembrete === "ENVIADO"
  ).length;
  const pendentes = lembretes.filter(
    (n) => n.statusLembrete === "PENDENTE"
  ).length;

  useEffect(() => {
    async function fetchLembretes() {
      try {
        const res = await fetch("http://localhost:8080/lembretes");
        const data = await res.json();
        setLembretes(data);
      } catch (error) {
        console.error("Erro ao buscar lembretes:", error);
      }
    }

    fetchLembretes();
  }, []);

  function adicionar(e: React.FormEvent) {
    e.preventDefault();
    const novo: Lembrete = {
      id: uid(),
      nomePaciente: nomePaciente.trim(),
      nomeMedico: nomeMedico.trim(),
      especialidade: especialidade.trim(),
      dataEnvio,
      canal,
      statusLembrete: "PENDENTE",
    };
    setLembretes((prev) => [novo, ...prev]);
    setShowModal(false);
    setNomePaciente("");
    setNomeMedico("");
    setEspecialidade("");
    setDataEnvio(agoraMais1h());
    setCanal("EMAIL");
  }

  function alternarStatus(id: number) {
    setLembretes((prev) =>
      prev.map((n) =>
        n.id === id
          ? {
              ...n,
              statusLembrete:
                n.statusLembrete === "ENVIADO" ? "PENDENTE" : "ENVIADO",
            }
          : n
      )
    );
  }

  function excluir(id: number) {
    setLembretes((prev) => prev.filter((n) => n.id !== id));
  }

  return (
    <div className="relative p-8 bg-gray-50 min-h-screen">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Lembretes</h1>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          + Adicionar Lembrete
        </Button>
      </header>

      {/* 🔹 Cards resumo */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Pendentes</h3>
          <p className="text-3xl font-bold text-blue-700 mt-2">{pendentes}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Enviados</h3>
          <p className="text-3xl font-bold text-green-700 mt-2">{enviados}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Total</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{total}</p>
        </div>
      </section>

      {/* 🔹 Lista de lembretes */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="font-semibold text-blue-900 mb-4">Lembretes Recentes</h2>
        {lembretes.length === 0 ? (
          <p className="text-gray-500 text-sm">
            Nenhum lembrete cadastrado ainda.
          </p>
        ) : (
          <ul className="space-y-3">
            {lembretes.map((n) => (
              <li
                key={n.id}
                className="flex justify-between items-center border border-gray-100 rounded-xl p-4 hover:bg-blue-50/50 transition"
              >
                <div>
                  <p
                    className={`font-medium ${
                      n.statusLembrete === "ENVIADO"
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {n.nomePaciente} — {n.especialidade}
                  </p>
                  <span className="text-xs text-gray-500">
                    {n.nomeMedico} • {n.canal} •{" "}
                    {new Date(n.dataEnvio).toLocaleString("pt-BR")}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => alternarStatus(n.id)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium border transition ${
                      n.statusLembrete === "ENVIADO"
                        ? "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                        : "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200"
                    }`}
                  >
                    {n.statusLembrete === "ENVIADO"
                      ? "Reativar"
                      : "Marcar Enviado"}
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
                Novo Lembrete
              </h2>

              <form onSubmit={adicionar} className="grid gap-4">
                <input
                  type="text"
                  placeholder="Nome do paciente"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={nomePaciente}
                  onChange={(e) => setNomePaciente(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Nome do médico"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={nomeMedico}
                  onChange={(e) => setNomeMedico(e.target.value)}
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
                  value={dataEnvio}
                  onChange={(e) => setDataEnvio(e.target.value)}
                  required
                />
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={canal}
                  onChange={(e) =>
                    setCanal(e.target.value as Lembrete["canal"])
                  }
                >
                  <option value="EMAIL">Email</option>
                  <option value="WHATSAPP">WhatsApp</option>
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
