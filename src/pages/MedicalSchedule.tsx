import { useEffect, useState } from "react";
import type { Consulta } from "../types/index";
import searchIcon from "../assets/icon_search.svg";

export default function MedicalSchedule() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchConsultas() {
      try {
        const res = await fetch("http://localhost:8080/consultas");
        const data = await res.json();
        setConsultas(data);
      } catch (error) {
        console.error("Erro ao buscar consultas:", error);
      }
    }

    fetchConsultas();
  }, []);

  const consultasFiltradas = consultas.filter(
    (c) =>
      c.paciente.pessoa.nome.toLowerCase().includes(search.toLowerCase()) ||
      c.medico.especialidade.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "REALIZADA":
        return "Realizada";
      case "NAO_COMPARECEU":
        return "Não compareceu";
      case "AGENDADA":
        return "Agendada";
      default:
        return status;
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 xl:p-10 bg-gray-50 min-h-screen">
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">
          Consultas
        </h1>
        <div className="relative w-full sm:w-20 lg:w-96 xl:w-[28rem]">
          <input
            type="text"
            placeholder="Buscar por paciente ou especialidade..."
            className="w-full pr-12 pl-4 py-2 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm md:text-base"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600
              text-white p-2 rounded-md transition-colors"
            onClick={() => console.log("Buscar:", search)}
          >
            <img src={searchIcon} alt="Buscar" className="w-4 h-4" />
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Consultas agendadas</h3>
          <p className="text-2xl font-bold text-blue-700 mt-1">
            {consultas.filter((c) => c.status === "AGENDADA").length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Consultas realizadas</h3>
          <p className="text-2xl font-bold text-green-700 mt-1">
            {consultas.filter((c) => c.status === "REALIZADA").length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Não compareceram</h3>
          <p className="text-2xl font-bold text-red-700 mt-1">
            {consultas.filter((c) => c.status === "NAO_COMPARECEU").length}
          </p>
        </div>
      </section>

      <div className="overflow-auto bg-white rounded-2xl shadow-sm border border-gray-100">
        <table className="min-w-full text-sm">
          <thead className="bg-blue-50 text-blue-900 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-3 text-left">Paciente</th>
              <th className="px-4 py-3 text-left">Médico</th>
              <th className="px-4 py-3 text-left">Especialidade</th>
              <th className="px-4 py-3 text-left">Data</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {consultasFiltradas.map((c) => (
              <tr
                key={c.id}
                className="hover:bg-blue-50/40 border-t border-gray-100 transition-colors"
              >
                <td className="px-4 py-3 font-medium text-gray-800">
                  {c.paciente.pessoa.nome}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {c.medico.pessoa.nome}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {c.medico.especialidade}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {new Date(c.dataConsulta).toLocaleString("pt-BR", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      c.status === "REALIZADA"
                        ? "bg-green-100 text-green-700"
                        : c.status === "NAO_COMPARECEU"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {getStatusLabel(c.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
