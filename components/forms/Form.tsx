"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters."}),

  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters."})
    .max(15, { message: "First name must be at most 15 characters."}),

  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters."})
    .max(15, { message: "Last name must be at most 15 characters."}),

   password: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres." }),

   confirmPassword: z
    .string()
    .min(6, { message: "A confirmação deve ter no mínimo 6 caracteres." }),
})

.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"], // o erro aparece no campo de confirmação
  }
)

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast(values.username + " " + values.firstName)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">


        <div className="bg-purple-300 flex flex-col items-center justify-center min-h-screen">
            <div className="bg-neutral-50 p-8 rounded-xl shadow-md w-[550px]">
              <div className="p-8">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="w-100">
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input className="border-stone-950 w-100" placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription className="text-black">
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>
              <div className="p-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-100">
                        <FormLabel>Nome:</FormLabel>
                        <FormControl>
                          <Input className="border-stone-950 w-100" placeholder="Nome" {...field} />
                        </FormControl>
                        <FormDescription className="text-black">
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>
              <div className="p-8">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-100">
                        <FormLabel>Sobrenome:</FormLabel>
                        <FormControl>
                          <Input className="border-stone-950 w-100" placeholder="Nome" {...field} />
                        </FormControl>
                        <FormDescription className="text-black">
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>
              <div className="p-8">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="w-100">
                        <FormLabel>Senha:</FormLabel>
                        <FormControl>
                          <Input  className="border-stone-950 w-100" placeholder="Senha" type="password"{...field} />
                        </FormControl>
                        <FormDescription className="text-black">
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>
              <div className="p-8">
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem className="w-100">
                        <FormLabel>Confirmar Senha:</FormLabel>
                        <FormControl>
                          <Input className="border-stone-950 w-100" placeholder="Senha" type="password"{...field} />
                        </FormControl>
                        <FormDescription className="text-black">
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              <div className="flex justify-end mt-4">
                <Button className= "bg-blue-600 text-white px-4 py-2 rounded-lg"type="submit">Submit</Button></div>
            </div>
        </div>
       </form>
    </Form>
  )
}
