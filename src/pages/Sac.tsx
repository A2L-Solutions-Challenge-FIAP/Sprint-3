import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface Props {
  buttonText: string;
}

// Schema com Zod
const schema = z.object({
  email: z
    .string()
    .email("Formato inválido")
    .min(10, "O email deve ter pelo menos 10 caracteres"),
  name: z
    .string()
    .min(2, "O nome deve conter pelo menos 2 caracteres"),
  message: z
    .string()
    .min(10, "A mensagem deve conter pelo menos 10 caracteres")
    .max(500, "A mensagem deve ter no máximo 500 caracteres"),
});

type FormData = z.infer<typeof schema>;

const Sac = ({ buttonText }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function enviarFormulario(data: FormData) {
    console.log("formulário enviado!", data);

    await new Promise((resolve) =>
      setTimeout(() => resolve("some value"), 3_000)
    );

    console.log("fim do submit");
    reset(); 
  }

  return (
    <section className="max-w-2xl mx-auto mt-12 p-8 bg-white shadow-lg rounded-2xl border border-gray-100">
      <h2 className="text-3xl font-extrabold text-center mb-6  bg-clip-text text-blue-900">
        Fale Conosco
      </h2>
      

      <form onSubmit={handleSubmit(enviarFormulario)} className="space-y-6">
       
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Nome</label>
          <input
            type="text"
            {...register("name")}
            className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 transition ${
              errors.name
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-300 focus:ring-purple-400"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

       
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Email</label>
          <input
            type="email"
            {...register("email")}
            className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 transition ${
              errors.email
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-300 focus:ring-purple-400"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Mensagem
          </label>
          <textarea
            {...register("message")}
            className={`w-full border rounded-lg p-3 min-h-[120px] focus:outline-none focus:ring-2 transition ${
              errors.message
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-300 focus:ring-purple-400"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={() => reset()}
            className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Limpar
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:opacity-90 transition disabled:opacity-50"
          > Enviar
            {isSubmitting ? "Enviando..." : buttonText}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Sac;
