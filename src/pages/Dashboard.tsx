import { useEffect, useState } from "react";
import type { Consulta } from "../types/consulta";
import type { Lembrete } from "../types/lembrete";

export default function Dashboard() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/consultas")
      .then((res) => res.json())
      .then((data) => setConsultas(data))
      .catch((err) => console.error("Erro ao buscar consultas:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/lembretes")
      .then((res) => res.json())
      .then((data) => setLembretes(data))
      .catch((err) => console.error("Erro ao buscar lembretes:", err));
  }, []);

  const consultasTotais = consultas.length;

  const lembretesEnviados = lembretes.filter(
    (l) => l.statusLembrete === "ENVIADO"
  ).length;

  const lembretesPendentes = lembretes.filter(
    (l) => l.statusLembrete === "PENDENTE"
  ).length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <header className="mb-8 lg:mb-10 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-blue-900 mb-2">
          Visão Geral
        </h1>
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg">
          Acompanhe o resumo de consultas e lembretes do sistema
        </p>
      </header>


      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Total de Consultas</h3>
          <p className="text-2xl sm:text-3xl font-bold text-blue-700 mt-1">
            {consultasTotais}
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Lembretes Enviados</h3>
          <p className="text-2xl sm:text-3xl font-bold text-green-700 mt-1">
            {lembretesEnviados}
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Lembretes Pendentes</h3>
          <p className="text-2xl sm:text-3xl font-bold text-amber-600 mt-1">
            {lembretesPendentes}
          </p>
        </div>
      </section>


      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8">

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto">
          <h2 className="text-base sm:text-lg font-semibold text-blue-900 mb-4">
            Consultas Recentes
          </h2>

          <table className="min-w-full text-xs sm:text-sm">
            <thead className="bg-blue-50 text-blue-900 uppercase text-[10px] sm:text-xs tracking-wider">
              <tr>
                <th className="px-3 py-2 text-left">Paciente</th>
                <th className="px-3 py-2 text-left">Médico</th>
                <th className="px-3 py-2 text-left">Especialidade</th>
                <th className="px-3 py-2 text-left">Data</th>
              </tr>
            </thead>
            <tbody>
              {consultas.map((c, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-100 hover:bg-blue-50/40 transition"
                >
                  <td className="px-3 py-2 font-medium text-gray-800 whitespace-nowrap">
                    {c.nomePaciente}
                  </td>
                  <td className="px-3 py-2 text-gray-600">
                    {c.nomeMedico}
                  </td>
                  <td className="px-3 py-2 text-gray-600">
                    {c.especialidade}
                  </td>
                  <td className="px-3 py-2 text-gray-600 whitespace-nowrap">
                    {new Date(c.dataConsulta).toLocaleString("pt-BR", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto">
          <h2 className="text-base sm:text-lg font-semibold text-blue-900 mb-4">
            Últimos Lembretes
          </h2>

          <table className="min-w-full text-xs sm:text-sm">
            <thead className="bg-blue-50 text-blue-900 uppercase text-[10px] sm:text-xs tracking-wider">
              <tr>
                <th className="px-3 py-2 text-left">Paciente</th>
                <th className="px-3 py-2 text-left">Canal</th>
                <th className="px-3 py-2 text-left">Data de Envio</th>
                <th className="px-3 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {lembretes.map((l) => (
                <tr
                  key={l.id}
                  className="border-t border-gray-100 hover:bg-blue-50/40 transition"
                >
                  <td className="px-3 py-2 font-medium text-gray-800">
                    {l.nomePaciente}
                  </td>
                  <td className="px-3 py-2 text-gray-600">{l.canal}</td>
                  <td className="px-3 py-2 text-gray-600 whitespace-nowrap">
                    {new Date(l.dataEnvio).toLocaleString("pt-BR", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </td>
                  <td className="px-3 py-2">
                    <span
                      className={`px-2 py-1 text-[11px] sm:text-xs rounded-full font-medium ${
                        l.statusLembrete === "ENVIADO"
                          ? "bg-green-100 text-green-700"
                          : l.statusLembrete === "PENDENTE"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {l.statusLembrete}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
