import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../components/Button";
import { schema, type FormData, type Props } from "../types";





const Sac = ({ buttonText }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [messageSucessful, setMessageSucessful] = useState(false);

async function enviarFormulario(data: FormData) {
  console.log("formulário enviado!", data);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  setMessageSucessful(true);     
  reset();                       

  setTimeout(() => {
    setMessageSucessful(false);  
  }, 5000);
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
          <label className="block font-semibold text-gray-700 mb-2">
            Email
          </label>
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
          <Button variant="secondary"
            type="button"
            onClick={() => reset()}
            className="px-5 py-2 "
          >
            Limpar
          </Button>

          <Button variant="primary"
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-2 rounded-lg text-white"
          >
            {isSubmitting ? "Enviando..." : buttonText ?? "Enviar"}
          </Button>
        </div>
        {messageSucessful && (
          <p className="text-green-600 text-sm">
            Formulário enviado com sucesso!
          </p>
        )}
      </form>
    </section>
  );
};

export default Sac;
