"use client";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation'
import { useToast } from "@/components/ui/use-toast"
import axios from 'axios';


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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChangeEvent, useState } from "react";
import { useSetRecoilState} from 'recoil';
import { userAtom } from '../../app/recoilContextProvider';
import React from "react";
import { Button } from "../ui/button";
import { boolean, z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirmPassword: z.string(),
  adminKey: z.string().optional(),
  phoneNumber: z.string().refine(value => {
    // Regular expression for a valid phone number format (example)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(value);
  }, {
    message: "Invalid phone number format.",
  })
  
}).refine(
  (data) => {
    return data.password === data.confirmPassword;
  },
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
);

function Signup() {
  const setUser = useSetRecoilState(userAtom);

  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    if(selectedOption=="option-two"){
      if(values.adminKey != "siu"){
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
        const isAdmin = (selectedOption=="option-two")
        if(isAdmin)
          console.log("admin hai")
        const { data } = await axios.post(
          "http://localhost:8081/user/signup",
          {
            email: values.email,
            password: values.password,
            username: values.username,
            isAdmin: isAdmin,
            phoneNumber: values.phoneNumber 
          }
        );
  
        toast({
          title: "SignUp Successful"
        });
        console.log("data.isAdmin = ",data.isAdmin);
        setUser(data) // phone number username _id isAuth
        // localStorage.setItem("userInfo", JSON.stringify(data));
        router.push("/home")
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormDescription>
                  *This is your public display name.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
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
                  <Input placeholder="Enter password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Phone number" {...field} />
                </FormControl>
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
