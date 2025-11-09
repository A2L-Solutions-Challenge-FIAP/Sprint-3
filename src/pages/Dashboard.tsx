

interface Consulta {
  id: number;
  paciente: string;
  especialidade: string;
  data: string;
  status: "Agendada" | "Realizada" | "Não compareceu";
}

interface Notificacao {
  id: number;
  titulo: string;
  dataEnvio: string;
  status: "Pendente" | "Enviada";
}

export default function Dashboard() {
  const consultasMock: Consulta[] = [
    { id: 1, paciente: "Maria Oliveira", especialidade: "Psiquiatria", data: "2025-11-08T10:00", status: "Agendada" },
    { id: 2, paciente: "Anderson Costa", especialidade: "Neurologia", data: "2025-11-05T14:00", status: "Realizada" },
    { id: 3, paciente: "José Carlos", especialidade: "Fisiatria", data: "2025-11-06T09:00", status: "Não compareceu" },
  ];

  const notificacoesMock: Notificacao[] = [
    { id: 1, titulo: "Lembrete de consulta – Maria Oliveira", dataEnvio: "2025-11-07T09:00", status: "Enviada" },
    { id: 2, titulo: "Lembrete de pesquisa de satisfação", dataEnvio: "2025-11-07T13:00", status: "Pendente" },
  ];

  const consultasAgendadas = consultasMock.filter((c) => c.status === "Agendada").length;
  const consultasRealizadas = consultasMock.filter((c) => c.status === "Realizada").length;
  const consultasFaltas = consultasMock.filter((c) => c.status === "Não compareceu").length;

  const notificacoesEnviadas = notificacoesMock.filter((n) => n.status === "Enviada").length;
  const notificacoesPendentes = notificacoesMock.filter((n) => n.status === "Pendente").length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">

      <header className="mb-8 lg:mb-10 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-blue-900 mb-2">Visão Geral</h1>
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg">
          Acompanhe o resumo de consultas e notificações do sistema
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Consultas agendadas</h3>
          <p className="text-2xl sm:text-3xl font-bold text-blue-700 mt-1">{consultasAgendadas}</p>
        </div>
        <div className="bg-white p-4  sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Consultas realizadas</h3>
          <p className="text-2xl sm:text-3xl font-bold text-green-700 mt-1">{consultasRealizadas}</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Faltas</h3>
          <p className="text-2xl sm:text-3xl font-bold text-red-700 mt-1">{consultasFaltas}</p>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-sm text-gray-500">Notificações enviadas</h3>
      <p className="text-2xl sm:text-3xl font-bold text-green-700 mt-1">
        {notificacoesEnviadas}
      </p>
    </div>

    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-sm text-gray-500">Notificações pendentes</h3>
      <p className="text-2xl sm:text-3xl font-bold text-blue-700 mt-1">
        {notificacoesPendentes}
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
            <th className="px-3 py-2 text-left">Especialidade</th>
            <th className="px-3 py-2 text-left">Data</th>
            <th className="px-3 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {consultasMock.map((c) => (
            <tr
              key={c.id}
              className="border-t border-gray-100 hover:bg-blue-50/40 transition"
            >
              <td className="px-3 py-2 font-medium text-gray-800 whitespace-nowrap">
                {c.paciente}
              </td>
              <td className="px-3 py-2 text-gray-600">{c.especialidade}</td>
              <td className="px-3 py-2 text-gray-600 whitespace-nowrap">
                {new Date(c.data).toLocaleString("pt-BR", {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </td>
              <td className="px-3 py-2">
                <span
                  className={`px-2 py-1 text-[11px] sm:text-xs rounded-full font-medium ${
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

    
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto">
      <h2 className="text-base sm:text-lg font-semibold text-blue-900 mb-4">
        Últimas Notificações
      </h2>

      <table className="min-w-full text-xs sm:text-sm">
        <thead className="bg-blue-50 text-blue-900 uppercase text-[10px] sm:text-xs tracking-wider">
          <tr>
            <th className="px-3 py-2 text-left">Título</th>
            <th className="px-3 py-2 text-left">Data</th>
            <th className="px-3 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {notificacoesMock.map((n) => (
            <tr
              key={n.id}
              className="border-t border-gray-100 hover:bg-blue-50/40 transition"
            >
              <td className="px-3 py-2 font-medium text-gray-800">
                {n.titulo}
              </td>
              <td className="px-3 py-2 text-gray-600 whitespace-nowrap">
                {new Date(n.dataEnvio).toLocaleString("pt-BR", {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </td>
              <td className="px-3 py-2">
                <span
                  className={`px-2 py-1 text-[11px] sm:text-xs rounded-full font-medium ${
                    n.status === "Enviada"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {n.status}
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