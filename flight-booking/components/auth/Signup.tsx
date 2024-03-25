"use client";
import { Input } from "@/components/ui/input";
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

import React from "react";
import { Button } from "../ui/button";

function Signup() {
  const form = useForm();
  const [selectedOption, setSelectedOption] = useState("option-one");
  const handleChange = (event: string) => {
    setSelectedOption(event);
    // Perform action based on the selected option
    if (event === "option-one") {
      console.log("User option selected");
      // Perform action for user option
    } else if (event === "option-two") {
      console.log("Admin option selected");
      // Perform action for admin option
    }
  };

  return (
    <div>
      <Form {...form}>
        <form className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="loginform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormDescription>
                  *This is your public display name.
                </FormDescription>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter password" {...field} />
                </FormControl>
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
                    <>
                    <FormLabel>Admin key</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter secret key" />
                  </FormControl>
                    </>
                    
                )}
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default Signup;
