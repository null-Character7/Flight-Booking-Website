import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Skip from "@/components/auth/Skip";
import style from "./style.module.css";

function homepage() {
  return (
    <div className={`flex justify-center items-center h-screen`}>
      <div className={style.ocean}>
        <div className={style.wave}></div>
        <div className={style.wave}></div>
      </div>
      <Tabs defaultValue="Login" className="w-[500px] h-[500px]">
        <TabsList className="flex">
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Signup">SignUp</TabsTrigger>
          <TabsTrigger value="Phone">Skip ?</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <Login />
        </TabsContent>
        <TabsContent value="Signup">
          <Signup />
        </TabsContent>
        <TabsContent value="Phone">
          <Skip />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default homepage;
