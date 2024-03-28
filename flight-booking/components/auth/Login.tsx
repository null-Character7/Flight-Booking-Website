"use client";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast"
import { Label } from "@/components/ui/label";

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
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { Button } from "../ui/button";

import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  adminKey: z.string().optional(),
});

function Signup() {
  const router = useRouter();
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    if(selectedOption=="option-two"){
      if(values.adminKey != 'siu'){
        console.log("wrong admin key")
        toast({
          title: "Wrong admin key",
        });
        return;
      }
      
    }
    try {
      // const config = {
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      // };

      // const { data } = await axios.post(
      //   "http://localhost:3001/api/users/login",
      //   { email, password },
      //   config
      // );

      toast({
        title: "Login Successful",
      });
      // setUser(data);
      // localStorage.setItem("userInfo", JSON.stringify(data));
      router.push("/home");
    } catch (error) {
      toast({
        title: "Error Occured!",
        // description: error.response.data.message,
      });
    }
  }

  const [selectedOption, setSelectedOption] = useState("option-one");
    const handleChange = (event: string) => {
      setSelectedOption(event);
      if (event === "option-one") {
        console.log("User option selected");
      } else if (event === "option-two") {
        console.log("Admin option selected");
      }
    };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <RadioGroup value={selectedOption} onValueChange={handleChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">User</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Admin</Label>
            </div>
          </RadioGroup>

          {selectedOption === "option-two" && (
            <FormField
            control={form.control}
            name="adminKey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Admin Key</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Admin Key" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          )}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      
    </div>
  );
}

export default Signup;
