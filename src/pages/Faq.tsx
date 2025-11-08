import { useState } from "react";



export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const perguntas = [
    {
      pergunta: "PARA QUE SERVE O DASHBOARD DE LEMBRETES?",
      resposta:
        "O dashboard permite que funcionários acompanhem, editem e gerenciem os lembretes de consultas médicas enviados aos pacientes. Ele ajuda a reduzir faltas, melhorar a organização da agenda e garantir que os pacientes estejam informados.",
    },
    {
      pergunta: "QUEM PODE ACESSAR O DASHBOARD?",
      resposta:
        "Apenas funcionários autorizados com credenciais válidas (login e senha) podem acessar o dashboard. Cada acesso é registrado e monitorado para garantir a segurança das informações.",
    },
    {
      pergunta: "É POSSÍVEL VER O STATUS DE UM LEMBRETE?",
      resposta:
        "Sim. O sistema exibe o status do lembrete, indicando se foi entregue, visualizado ou se houve falha no envio. Também é possível ver se o paciente confirmou presença.",
    },
    {
      pergunta: "POSSO EDITAR OU REENVIAR UM LEMBRETE?",
      resposta:
        "Sim. Você pode editar os dados do lembrete, como horário ou conteúdo, e reenviar a mensagem diretamente pelo painel. Há também opção de criar novos lembretes rapidamente.",
    },
    {
      pergunta: "O QUE FAZER SE O ENVIO FALHAR?",
      resposta:
        "O sistema sinaliza automaticamente falhas no envio. Nesse caso, você pode: \nVerificar se o número de telefone está correto;\nReenviar o lembrete manualmente;\nNotificar o suporte se o problema persistir.",
    },

    {
      pergunta: "COMO FILTRAR OS LEMBRETES?",
      resposta:
        "Você pode filtrar por: Nome do paciente; Data da consulta;Status do lembrete (enviado, pendente, falha);Tipo de consulta ou profissional responsável funcionar, verifique se sua internet está estável e se o aplicativo está atualizado. Isso resolve a maioria dos casos. Caso o problma continue, entre em contato com o suporte.",
    },
    {
      pergunta: "POSSO EXPORTAR OS DADOS?",
      resposta:
        "Sim. É possível gerar relatórios em formatos como PDF ou JSON com os lembretes enviados, confirmados e pendentes, organizados por período ou equipe.",
    },
  ];

  return (
    <>
    <main className="max-w-5xl mx-auto mt-12 p-6">
      <h2 className="text-4xl font-extrabold text-center mb-10  text-blue-900  bg-clip-text">
        Perguntas Frequentes
      </h2>

      <div className="flex flex-col gap-6">
        {perguntas.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left text-lg font-semibold text-purple-900 flex justify-between items-center"
            >
              <span>{item.pergunta}</span>
              <div
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  openIndex === index
                    ? "rotate-180 text-orange-600"
                    : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-screen mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 bg-gray-50 rounded-md p-4 text-sm leading-relaxed whitespace-pre-line">
                {item.resposta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>

    </>
  );
}
