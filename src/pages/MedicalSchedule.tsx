import { useState } from "react";

interface Consulta {
  id: number;
  paciente: string;
  medico: string;
  especialidade: string;
  data: string; 
  status: "Agendada" | "Realizada" | "Não compareceu";
}

export default function MedicalSchedule() {
  const [search, setSearch] = useState("");
  const consultas: Consulta[] = [
    {
      id: 1,
      paciente: "Maria Oliveira",
      medico: "Dra. Camila Torres",
      especialidade: "Psiquiatria",
      data: "2025-11-02T10:00",
      status: "Agendada",
    },
    {
      id: 2,
      paciente: "Anderson Costa",
      medico: "Dr. João Silva",
      especialidade: "Neurologia",
      data: "2025-11-03T14:30",
      status: "Realizada",
    },
    {
      id: 3,
      paciente: "José Carlos",
      medico: "Dra. Paula Mendes",
      especialidade: "Fisiatria",
      data: "2025-11-05T09:00",
      status: "Não compareceu",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-3xl font-bold text-blue-900">Consultas</h1>
        <div className="flex flex-col sm:flex-row gap-3 items-center w-full sm:w-auto">

          <input
            type="text"
            placeholder="Buscar por paciente ou especialidade..."
            className="w-full sm:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
    
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Consultas agendadas</h3>
          <p className="text-2xl font-bold text-blue-700 mt-1">
            {consultas.filter((c) => c.status === "Agendada").length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Consultas realizadas</h3>
          <p className="text-2xl font-bold text-green-700 mt-1">
            {consultas.filter((c) => c.status === "Realizada").length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Não compareceram</h3>
          <p className="text-2xl font-bold text-red-700 mt-1">
            {consultas.filter((c) => c.status === "Não compareceu").length}
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
            {consultas.map((c) => (
              <tr
                key={c.id}
                className="hover:bg-blue-50/40 border-t border-gray-100 transition-colors"
              >
                <td className="px-4 py-3 font-medium text-gray-800">{c.paciente}</td>
                <td className="px-4 py-3 text-gray-600">{c.medico}</td>
                <td className="px-4 py-3 text-gray-600">{c.especialidade}</td>
                <td className="px-4 py-3 text-gray-600">
                  {new Date(c.data).toLocaleString("pt-BR", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      c.status === "Realizada"
                        ? "bg-green-100 text-green-700"
                        : c.status === "Não compareceu"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {c.status}
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