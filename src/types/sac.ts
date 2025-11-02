import * as z from "zod";

export interface Props {
  buttonText?: string;
}

export const schema = z.object({
  email: z
    .string()
    .email("Formato inválido")
    .min(10, "O email deve ter pelo menos 10 caracteres"),
  name: z.string().min(2, "O nome deve conter pelo menos 2 caracteres"),
  message: z
    .string()
    .min(10, "A mensagem deve conter pelo menos 10 caracteres")
    .max(500, "A mensagem deve ter no máximo 500 caracteres"),
});

export type FormData = z.infer<typeof schema>;

