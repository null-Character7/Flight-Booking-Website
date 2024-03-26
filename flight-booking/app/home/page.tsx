"use client"
import Leftbar from "@/components/Leftbar";
import Mainpage from "@/components/home/Mainpage";
import React from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { navStateAtom } from "../recoilContextProvider";
import Reserve from "@/components/reserve/Reserve";
import MyReservations from "@/components/myReservations/MyReservations";
import AddFlights from "@/components/addFlights/AddFlights";
function homepage() {
  const navState = useRecoilValue(navStateAtom);

  return (
    <div className="flex">
      <div className="w-1/6   h-screen overflow-y-auto">
        <Leftbar />
      </div>
      <div className="w-5/6 border border-white border-l-4 overflow-y-auto">
      {navState === 'home' && <Mainpage />}
      {navState === 'reserve' && <Reserve />}
      {navState === 'myReservations' && <MyReservations />}
      {navState === 'addFlights' && <AddFlights/>}
      </div>
    </div>
  );
}

export default homepage;
