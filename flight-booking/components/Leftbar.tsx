import React from "react";
import { navStateAtom } from "@/app/recoilContextProvider";
import { useRecoilState, useSetRecoilState } from "recoil";

function Leftbar() {
  const [navState, setNavState] = useRecoilState(navStateAtom);
  const handleButtonClick = (navValue: string) => {
    setNavState(navValue);
  };
  
  return (
    <div className="flex flex-col justify-center h-screen fixed">
    <div className="flex flex-col items-start">
      <button
        className={`bg-transparent ${
          navState === "home" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white text-blue-500"
        } font-bold py-2 px-4 rounded text-left`}
        onClick={() => handleButtonClick("home")}
      >
        Home
      </button>
      <button
        className={`bg-transparent ${
          navState === "reserve" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white text-blue-500"
        } font-bold py-2 px-4 rounded mt-4 text-left`}
        onClick={() => handleButtonClick("reserve")}
      >
        Reserve
      </button>
      <button
        className={`bg-transparent ${
          navState === "myReservations" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white text-blue-500"
        } font-bold py-2 px-4 rounded mt-4 text-left`}
        onClick={() => handleButtonClick("myReservations")}
      >
        My Reservations
      </button>
      <button
        className={`bg-transparent ${
          navState === "addFlights" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white text-blue-500"
        } font-bold py-2 px-4 rounded mt-4 text-left`}
        onClick={() => handleButtonClick("addFlights")}
      >
        Add flights
      </button>
    </div>
  </div>
  );
}

export default Leftbar;