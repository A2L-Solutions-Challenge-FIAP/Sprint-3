const Home = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 animate-fadeIn">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Sobre o Sistema
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-justify">
        Este dashboard foi desenvolvido para otimizar o acompanhamento e o envio
        de lembretes para pacientes de consultas online do IMREA. A solução
        permite que os
        <strong> funcionários visualizem, editem e acompanhem</strong> lembretes
        enviados aos pacientes, ajudando a reduzir faltas e melhorar o fluxo de
        atendimento.
      </p>

      <p className="text-lg text-gray-700 mb-6 text-justify">
        Com uma interface intuitiva e responsiva, os colaboradores podem acessar
        em tempo real os status dos lembretes, filtrar por paciente, data ou
        tipo de consulta, e até gerar relatórios para acompanhamento de
        desempenho e efetividade do contato.
      </p>

      <p className="text-lg text-gray-700 mb-6 text-justify">
        Além disso, o dashboard está integrado a ferramentas de envio
        automatizado de mensagens e pode ser estendido com funcionalidades como:
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Confirmação de presença pelo paciente</li>
          <li>Alertas de consultas pendentes</li>
          <li>Relatórios por período ou por especialidade</li>
        </ul>
      </p>
    </main>
  );
};

export default Home;
