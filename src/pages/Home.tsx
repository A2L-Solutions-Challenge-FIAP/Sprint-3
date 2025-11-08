
const Home = () => {

  return (
  <>

        <main className="flex flex-col items-center text-center px-6 max-w-3xl mx-auto mt-20 p-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Gerencie lembretes com praticidade e eficiência 
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
          O Sistema de Lembretes foi desenvolvido para reduzir faltas em consultas médicas
          e melhorar a comunicação entre instituições de saúde e pacientes,
          automatizando o envio de notificações por SMS, WhatsApp e e-mail.
        </p>

      </main>

      <section className="grid md:grid-cols-3 gap-6  max-w-5xl w-full px-6 mx-auto mt-20 p-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
          <h3 className="text-blue-800 font-semibold mb-2">📅 Redução de Faltas</h3>
          <p className="text-sm text-gray-600">
            Envio automático de lembretes personalizados antes das consultas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
          <h3 className="text-blue-800 font-semibold mb-2">💬 Comunicação Eficiente</h3>
          <p className="text-sm text-gray-600">
            Mensagens via WhatsApp, SMS e e-mail, de acordo com o perfil do paciente.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
          <h3 className="text-blue-800 font-semibold mb-2">📈 Indicadores de Adesão</h3>
          <p className="text-sm text-gray-600">
            Monitore lembretes enviados e respostas em tempo real com relatórios automáticos.
          </p>
        </div>
      </section>
      

  </>
  
  )
}

export default Home
