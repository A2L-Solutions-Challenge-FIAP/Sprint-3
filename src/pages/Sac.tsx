import { useState } from "react";

export default function Sac() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    if (formData.name.trim().length < 2) {
      newErrors.name = "O nome deve conter pelo menos 2 caracteres";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "O email deve ser um email válido";
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "A mensagem deve conter pelo menos 10 caracteres";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Fale Conosco</h2>
      <form onSubmit={handleSubmit}>
        <label className="block font-semibold mb-1">Nome:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md mb-1"
          required
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

        <label className="block font-semibold mt-4 mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md mb-1"
          required
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        <label className="block font-semibold mt-4 mb-1">Mensagem:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md min-h-[100px]"
          required
        />
        {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message}</p>}

        <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Enviar
          </button>
          <button
            type="reset"
            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition"
            onClick={() => setFormData({ name: "", email: "", message: "" })}
          >
            Limpar
          </button>
        </div>
      </form>
    </section>
  );
}