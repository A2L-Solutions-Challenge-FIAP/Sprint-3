import github from "../assets/github.png";
import linkedIn from "../assets/linkedIn.png";
import ana from "../assets/ana.png";
import gui from "../assets/gui.png";
import avatar from "../assets/avatar.png";

const Developers = () => {
  const integrantes = [
    {
      nome: "Ana Flavia de Freitas",
      rm: "565559",
      turma: "1TDSPK",
      linkedin: "https://www.linkedin.com/in/ana-fl%C3%A1via-de-freitas/",
      github: "https://github.com/anafreitas-br",
      foto: ana,
    },
    {
      nome: "Luis Guilherme Borges Silva",
      rm: "566548",
      turma: "1TDSPK",
      linkedin: "https://www.linkedin.com/in/luis130505/",
      github: "https://github.com/LuisGdev13",
      foto: gui,

    },
    {
      nome: "Gabriel Garcia",
      rm: "563298",
      turma: "1TDSPK",
      linkedin: "https://www.linkedin.com/in/gabriel-garcia-7b9675234/",
      github: "https://github.com/Gabriel-hub-prog22",
      foto: avatar,

    },
  ];
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-10">
        Desenvolvedores
      </h2>

      <section className="grid gap-8">
        {integrantes.map((dev, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <img
              src={dev.foto}
              alt={`Foto de ${dev.nome}`}
              className="w-28 h-28 rounded-full border-2 border-gray-300 object-cover"
            />

            <article className="text-center sm:text-left flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {dev.nome}
              </h3>
              <p className="text-gray-600">
                <strong>RM:</strong> {dev.rm} | <strong>Turma:</strong>{" "}
                {dev.turma}
              </p>

              <div className="flex justify-center sm:justify-start gap-4 mt-4">
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                >
                  <img
                    src={linkedIn}
                    alt="LinkedIn"
                    className="w-8 h-8 hover:opacity-80 transition"
                  />
                </a>
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 hover:text-black transition"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    className="w-8 h-8 hover:opacity-80 transition"
                  />
                </a>
              </div>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Developers;
