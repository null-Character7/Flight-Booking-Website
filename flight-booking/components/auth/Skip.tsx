"use client"
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation'


import { z } from "zod";

const formSchema = z.object({
  phoneNumber: z.string().refine(value => {
    // Regular expression for a valid phone number format (example)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(value);
  }, {
    message: "Invalid phone number format.",
  })
  
})

function Skip() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   username: "",
    // },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push("/home")
  }
  return (
    <div>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Continue without signing up...</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone number" {...field} />
                </FormControl>
                <FormDescription>
                  We recommend you to signup to get personalized view 
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
          </form>
     </Form>
        
    </div>
  )
}

export default Skip