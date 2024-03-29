import React from "react";
import { navStateAtom } from "@/app/recoilContextProvider";
import { userAtom } from "@/app/recoilContextProvider";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";

function Leftbar() {
  const router = useRouter();
  const [navState, setNavState] = useRecoilState(navStateAtom);
  const user = useRecoilValue(userAtom);
  const handleButtonClick = (navValue: string) => {
    setNavState(navValue);
  };
  function handleLogout(){
    localStorage.removeItem("userInfo");
    router.push("/user")
  }
  
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
      {user.isAuth &&  <button
        className={`bg-transparent ${
          navState === "myReservations" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white text-blue-500"
        } font-bold py-2 px-4 rounded mt-4 text-left`}
        onClick={() => handleButtonClick("myReservations")}
      >
        My Reservations
      </button>}
      {user.isAdmin &&<button
        className={`bg-transparent ${
          navState === "addFlights" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white text-blue-500"
        } font-bold py-2 px-4 rounded mt-4 text-left`}
        onClick={() => handleButtonClick("addFlights")}
      >
        Add flights
      </button>}
      <button
        className={`bg-transparent hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded mt-4 text-left`}
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  </div>
  );
}

export default Leftbar;
