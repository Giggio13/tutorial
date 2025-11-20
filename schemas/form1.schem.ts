import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

export const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters."}),
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters."}),
  lastName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters."}),
  email: z  
    .string()
    .email({ message: "Invalid email address."}),
})

//Type
export type formType = z.infer<typeof formSchema>

//Resolver
export const formResolver = zodResolver(formSchema)

//Default values
export const defaultValues = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
}
