import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

//schema
export const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters."})
    .max(50, { message: "Username must be at most 50 characters."}),

  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters."})
    .max(50, { message: "First name must be at most 50 characters."}),

  lastName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters."})
    .max(50, { message: "First name must be at most 50 characters."}),

  email: z
    .email(),

  gender: z
    .string()
    .min(1, { message: "Gender is required."}),

  mobile: z
    .string()
    .regex(
    /^(\+55|55)?\s?\(?\d{2}\)?\s?\d{5}\-?\d{4}$/,
    { message: "Número de celular inválido." }
  )
    
})


//type
export type formType = z.infer<typeof formSchema>

//resolver
export const formResolver = zodResolver(formSchema)

//default values
export const defaultValues: formType = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  mobile: "",
}
