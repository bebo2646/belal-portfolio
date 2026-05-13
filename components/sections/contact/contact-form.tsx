"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodObject } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "// Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "// Please enter a valid email." }),
  message: z.string().min(1, {
    message: "// please enter any message to submit",
  }),
});

const defaultValues: z.infer<typeof formSchema> = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>_Name</FormLabel>
              <FormControl>
                <Input placeholder="Your-Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>_Email</FormLabel>
              <FormControl>
                <Input placeholder="your-email@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>_Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Let's Work Together!" className="resize-y max-h-44" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row gap-4">
          <Button className="w-full md:w-1/2 h-14 font-bold text-lg" type="submit">
            Send Message
          </Button>
          
          <Link 
            href="https://wa.me/201151970493" 
            target="_blank"
            className="w-full md:w-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center justify-center gap-2 h-14 glass rounded-md border border-white/10 overflow-hidden transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]"
            >
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <MessageCircle className="text-green-500 group-hover:scale-110 transition-transform" size={20} />
              <span className="font-bold">WhatsApp</span>
            </motion.div>
          </Link>
        </div>
      </form>
    </Form>
  );
}
