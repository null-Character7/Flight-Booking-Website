"use client"
import Leftbar from "@/components/Leftbar";
import Mainpage from "@/components/home/Mainpage";
import React from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { navStateAtom } from "../recoilContextProvider";
import { userAtom } from "../recoilContextProvider";
import MyReservations from "@/components/myReservations/MyReservations";
import AddFlights from "@/components/addFlights/AddFlights";
function homepage() {
  const navState = useRecoilValue(navStateAtom);
  const user = useRecoilValue(userAtom);
  console.log(user)
  return (
    <div className="flex">
      <div className="w-1/6   h-screen overflow-y-auto">
        <Leftbar />
      </div>
      <div className="w-5/6  overflow-y-auto">
      {navState === 'home' && <Mainpage />}
      {navState === 'myReservations' && <MyReservations />}
      { navState === 'addFlights'  && <AddFlights/>}
      </div>
    </div>
  );
}

export default homepage;
