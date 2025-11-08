import { useState } from "react";

interface Especialidade {
  nome: string;
  atual: {
    consultas: number;
    confirmadas: number;
    realizadas: number;
    canceladas: number;
  };
  anterior: {
    consultas: number;
    confirmadas: number;
    realizadas: number;
    canceladas: number;
  };
}

export default function Reports() {
  const [especialidades] = useState<Especialidade[]>([
    {
      nome: "Fisiatria",
      atual: { consultas: 14, confirmadas: 11, realizadas: 10, canceladas: 2 },
      anterior: { consultas: 12, confirmadas: 9, realizadas: 8, canceladas: 2 },
    },
    {
      nome: "Neurologia",
      atual: { consultas: 18, confirmadas: 15, realizadas: 13, canceladas: 3 },
      anterior: { consultas: 15, confirmadas: 11, realizadas: 10, canceladas: 3 },
    },
    {
      nome: "Psiquiatria",
      atual: { consultas: 9, confirmadas: 8, realizadas: 7, canceladas: 1 },
      anterior: { consultas: 8, confirmadas: 6, realizadas: 5, canceladas: 1 },
    },
    {
      nome: "Terapia Ocupacional",
      atual: { consultas: 10, confirmadas: 8, realizadas: 6, canceladas: 2 },
      anterior: { consultas: 10, confirmadas: 7, realizadas: 6, canceladas: 2 },
    },
  ]);

  // Totais atuais e anteriores
  const totalAtual = especialidades.reduce((acc, e) => acc + e.atual.consultas, 0);
  const totalAnterior = especialidades.reduce((acc, e) => acc + e.anterior.consultas, 0);
  const confirmadasAtual = especialidades.reduce((acc, e) => acc + e.atual.confirmadas, 0);
  const confirmadasAnterior = especialidades.reduce((acc, e) => acc + e.anterior.confirmadas, 0);
  const realizadasAtual = especialidades.reduce((acc, e) => acc + e.atual.realizadas, 0);
  const realizadasAnterior = especialidades.reduce((acc, e) => acc + e.anterior.realizadas, 0);
  const canceladasAtual = especialidades.reduce((acc, e) => acc + e.atual.canceladas, 0);
  const canceladasAnterior = especialidades.reduce((acc, e) => acc + e.anterior.canceladas, 0);

  // Taxas e variações
  const variacao = ((totalAtual - totalAnterior) / totalAnterior) * 100;
  const taxaConfirmacao = ((confirmadasAtual / totalAtual) * 100).toFixed(1);
  const taxaCancelamento = ((canceladasAtual / totalAtual) * 100).toFixed(1);
  const taxaResposta = ((realizadasAtual / confirmadasAtual) * 100).toFixed(1);

  const arrow = (value: number) =>
    value > 0 ? "text-green-600" : value < 0 ? "text-red-600" : "text-gray-500";

  const formatDiff = (current: number, previous: number) => {
    const diff = ((current - previous) / previous) * 100;
    return (
      <span className={`text-xs font-semibold ${arrow(diff)}`}>
        {diff > 0 ? `↑ ${diff.toFixed(1)}%` : diff < 0 ? `↓ ${Math.abs(diff).toFixed(1)}%` : "—"}
      </span>
    );
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Cabeçalho */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          Relatório Semanal de Consultas
        </h1>
        <p className="text-gray-500 text-sm">
          Comparativo entre a semana atual e a anterior — desempenho por especialidade e taxas.
        </p>
      </header>

      {/* Cards resumo */}
      <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Consultas (Semana)</h3>
          <p className="text-3xl font-bold text-blue-800 mt-2">{totalAtual}</p>
          {formatDiff(totalAtual, totalAnterior)}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Confirmadas</h3>
          <p className="text-3xl font-bold text-indigo-700 mt-2">{confirmadasAtual}</p>
          {formatDiff(confirmadasAtual, confirmadasAnterior)}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Realizadas</h3>
          <p className="text-3xl font-bold text-green-700 mt-2">{realizadasAtual}</p>
          {formatDiff(realizadasAtual, realizadasAnterior)}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Canceladas</h3>
          <p className="text-3xl font-bold text-red-700 mt-2">{canceladasAtual}</p>
          {formatDiff(canceladasAtual, canceladasAnterior)}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Taxa de Confirmação</h3>
          <p className="text-3xl font-bold text-blue-700 mt-2">{taxaConfirmacao}%</p>
        </div>
      </section>

      {/* Taxas adicionais */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Taxa de Cancelamento</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">{taxaCancelamento}%</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-sm text-gray-500">Taxa de Resposta</h3>
          <p className="text-3xl font-bold text-green-700 mt-2">{taxaResposta}%</p>
        </div>
      </section>

      {/* Tabela comparativa */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-8">
        <h2 className="font-semibold text-blue-900 mb-4">
          Consultas por Especialidade — Semana Atual vs. Anterior
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-blue-50 text-blue-900 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Especialidade</th>
                <th className="px-4 py-3 text-left">Atual</th>
                <th className="px-4 py-3 text-left">Anterior</th>
                <th className="px-4 py-3 text-left">Variação</th>
                <th className="px-4 py-3 text-left">% Confirmação</th>
                <th className="px-4 py-3 text-left">% Cancelamento</th>
              </tr>
            </thead>
            <tbody>
              {especialidades.map((e, i) => {
                const taxaConf = ((e.atual.confirmadas / e.atual.consultas) * 100).toFixed(1);
                const taxaCanc = ((e.atual.canceladas / e.atual.consultas) * 100).toFixed(1);
                return (
                  <tr
                    key={i}
                    className="hover:bg-blue-50/50 border-t border-gray-100 transition"
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">{e.nome}</td>
                    <td className="px-4 py-3 text-blue-700 font-semibold">{e.atual.consultas}</td>
                    <td className="px-4 py-3 text-gray-600">{e.anterior.consultas}</td>
                    <td className="px-4 py-3">{formatDiff(e.atual.consultas, e.anterior.consultas)}</td>
                    <td className="px-4 py-3 text-blue-700">{taxaConf}%</td>
                    <td className="px-4 py-3 text-red-700">{taxaCanc}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Resumo analítico */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="font-semibold text-blue-900 mb-4">Análise Resumida</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Nesta semana foram registradas <strong>{totalAtual}</strong> consultas, representando{" "}
          {variacao > 0 ? (
            <strong className="text-green-700">↑ {variacao.toFixed(1)}%</strong>
          ) : (
            <strong className="text-red-700">↓ {Math.abs(variacao).toFixed(1)}%</strong>
          )}{" "}
          em relação à semana anterior.{" "}
          A taxa média de confirmação foi de <strong>{taxaConfirmacao}%</strong>, com{" "}
          <strong>{taxaCancelamento}%</strong> de cancelamentos. A taxa de resposta — proporção de
          consultas realizadas entre as confirmadas — alcançou{" "}
          <strong>{taxaResposta}%</strong>, refletindo a adesão dos pacientes e a efetividade do
          acompanhamento das agendas médicas.
        </p>
      </section>
    </div>
  );
}