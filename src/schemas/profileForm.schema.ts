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
  ),

  hometownCountry: z
    .string()
    .min(2, { message: "Country must be at least 2 characters." }),

  hometownState: z
    .string()
    .min(2, { message: "State must be at least 2 characters." }),

  hometownCity: z
    .string()
    .min(2, { message: "City must be at least 2 characters." }),

  bio: z
    .string()
    .max(500, { message: "Bio must be at most 500 characters." }),
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
  hometownCountry: "",
  hometownState: "",
  hometownCity: "",
bio: "",
}
