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

const Developers = () => {
  return(
  <main>
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
              className="w-44 h-auto rounded-lg border-4 border-gray-200 object-cover"
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
                  className="text-black hover:underline break-all"
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
                  className="text-black hover:underline break-all"
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

export default Developers;