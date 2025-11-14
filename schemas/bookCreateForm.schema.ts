import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'

//schema
export const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),

  publishDate: z
    .number()
    .min(1900, "Publish date must be at least 1900.")
    .max(2100, "Publish date must be at most 2100."),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters.")
})

//type
export type formType = z.infer<typeof formSchema>

//resolver
export const formResolver = zodResolver(formSchema)

//default values
export const defaultValues = {
    title: "",
    publishDate: 2000,
    description: "",
}
