
import { useState } from "react";



const perguntas = [
{
pergunta: "PARA QUE SERVE O DASHBOARD DE LEMBRETES?",
resposta:
"O dashboard permite que funcionários acompanhem, editem e gerenciem os lembretes de consultas médicas enviados aos pacientes. Ele ajuda a reduzir faltas, melhorar a organização da agenda e garantir que os pacientes estejam informados."},
{
pergunta: "QUEM PODE ACESSAR O DASHBOARD?",
resposta:
"Apenas funcionários autorizados com credenciais válidas (login e senha) podem acessar o dashboard. Cada acesso é registrado e monitorado para garantir a segurança das informações."},
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


export default function Faq() {
const [openIndex, setOpenIndex] = useState<number | null>(null);


const toggleQuestion = (index: number) => {
setOpenIndex(openIndex === index ? null : index);
};


return (
<main className="max-w-5xl mx-auto mt-12 p-6">
<h2 className="text-4xl font-bold text-purple-800 text-center mb-8">
Perguntas Frequentes
</h2>


<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{perguntas.map((item, index) => (
<div
key={index}
className="bg-white rounded-lg shadow-md p-4 transition-all border border-gray-200"
>
<button
onClick={() => toggleQuestion(index)}
className="w-full text-left text-lg font-semibold bg-purple-800 text-white rounded-md px-4 py-3 hover:bg-orange-600 flex justify-between items-center"
>
{item.pergunta}

</button>


{openIndex === index && (
<div className="mt-3 p-3 bg-gray-50 text-gray-700 rounded-md text-sm leading-relaxed">
{item.resposta}
</div>
)}
</div>
))}
</div>
</main>
);
}