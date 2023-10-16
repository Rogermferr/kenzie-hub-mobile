import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().nonempty("Nome obrigatório"),
    email: z.string().nonempty("Email obrigatório").email("Email inválido"),
    password: z
      .string()
      .min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres"),
    passwordConfirmation: z
      .string()
      .nonempty("A confirmação de senha é obrigatória"),
    bio: z.string().nonempty("Descrição obrigatória"),
    contact: z.string().nonempty("Informação de contato obrigatória"),
    course_module: z.string().nonempty("Módulo é obrigatório"),
  })
  .refine(
    ({ password, passwordConfirmation }) => password === passwordConfirmation,
    {
      message: "As senhas precisam corresponderem",
      path: ["passwordConfirmation"],
    }
  );
