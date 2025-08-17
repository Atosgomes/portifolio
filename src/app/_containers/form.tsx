"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres." })
    .max(100),
  email: z.string().email(),
  phone: z
    .string()
    .min(10, { message: "Telefone deve ter pelo menos 10 caracteres." })
    .max(15, { message: "Telefone deve ter no máximo 15 caracteres." })
    .regex(/^\d+$/, "Apenas números são permitidos"), // só números
  message: z
    .string()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." })
    .max(100),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="bg-black p-10 text-white text-center h-screen">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold m-10">Entre em contato</h1>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center justify-center">
                  <FormLabel className="text-left w-70">Nome</FormLabel>
                  <FormControl>
                    <Input
                      className=" text-left w-70   
             text-white 
             border 
             !bg-black
             focus:!border-[#FACC15] focus:!ring-0"
                      placeholder="Digite seu nome"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center justify-center">
                  <FormLabel className="text-left w-70">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="text-left w-70   
             text-white 
             border 
             bg-black
             focus:!border-yellow-400 focus:!ring-0"
                      placeholder="email@example.com   "
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center justify-center">
                  <FormLabel className="text-left w-70">Telefone</FormLabel>
                  <FormControl>
                    <Input
                      className="text-left w-70   
             text-white 
             border 
             bg-black
             focus:!border-[#FACC15] focus:!ring-0"
                      placeholder="(99) 99999-9999"
                      type="tel"
                      {...form.register("phone")}
                      inputMode="numeric"
                      pattern="[0-9]*"
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center justify-center">
                  <FormLabel className="text-left w-70 ">Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none h-30 w-70 text-left 
             text-white 
             border 
             bg-black
             focus:!border-[#FACC15] focus:!ring-0"
                      placeholder="Digite sua mensagem"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className=" cursor-pointer hover:text-[#FACC15] w-70 h-10">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
