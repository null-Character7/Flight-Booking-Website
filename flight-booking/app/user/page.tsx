import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";

function homepage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Tabs defaultValue="Login" className="w-[400px]">
        <TabsList className="flex">
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Signup">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <Login></Login>
        </TabsContent>
        <TabsContent value="Signup">
          <Signup></Signup>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default homepage;
