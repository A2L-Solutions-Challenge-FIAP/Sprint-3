import ana from "../assets/ana.png";

const integrantes = [
  {
    nome: "Ana Flavia de Freitas",
    rm: "565559",
    turma: "1TDSPK",
    linkedin: "https://www.linkedin.com/in/ana-fl%C3%A1via-de-freitas/",
    github: "https://github.com/anafreitas-br",
    foto: ana,
  },

];

export default function Developers() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 animate-fadeIn">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Sobre o Sistema</h1>
 <p className="text-lg text-gray-700 mb-6 text-justify">
        Este dashboard foi desenvolvido para otimizar o acompanhamento e o envio de lembretes para pacientes de consultas online
        do IMREA. A solução permite que os
        <strong> funcionários visualizem, editem e acompanhem</strong> lembretes enviados aos pacientes, ajudando
        a reduzir faltas e melhorar o fluxo de atendimento.
      </p>

      <p className="text-lg text-gray-700 mb-6 text-justify">
        Com uma interface intuitiva e responsiva, os colaboradores podem acessar em tempo real os status dos lembretes,
        filtrar por paciente, data ou tipo de consulta, e até gerar relatórios para acompanhamento de desempenho e
        efetividade do contato.
      </p>

      <p className="text-lg text-gray-700 mb-6 text-justify">
        Além disso, o dashboard está integrado a ferramentas de envio automatizado de 
        mensagens e pode ser estendido com funcionalidades como:
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Confirmação de presença pelo paciente</li>
          <li>Alertas de consultas pendentes</li>
          <li>Relatórios por período ou por especialidade</li>
        </ul>
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">Desenvolvedores</h2>

      <section className="space-y-10">
        {integrantes.map((dev, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center gap-6 p-6 rounded-xl bg-gray-50 shadow-md"
          >
            <img
              src={ana}
              alt={`Foto de ${dev.nome}`}
              className="w-44 h-auto rounded-lg border-4 border-emerald-500 object-cover"
            />
            <article className="flex-1 min-w-[250px]">
              <h2 className="text-xl font-semibold text-blue-800 mb-1">{dev.nome}</h2>
              <p className="text-gray-600 mb-1">
                <strong>RM:</strong> {dev.rm}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Turma:</strong> {dev.turma}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline break-all"
                >
                  {dev.linkedin.replace("https://www.linkedin.com/in", "")}
                </a>
              </p>
              <p className="text-gray-600">
                <strong>GitHub:</strong>{" "}
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline break-all"
                >
                  {dev.github.replace("https://github.com/", "")}
                </a>
              </p>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
}