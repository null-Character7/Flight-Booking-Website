import React from 'react'
import { navStateAtom } from '@/app/recoilContextProvider'
import { useSetRecoilState } from 'recoil';

function Leftbar() {
const setNavState = useSetRecoilState(navStateAtom);
const handleButtonClick = (navValue:string) => {
    setNavState(navValue); 
};
  return (
    <div className="flex flex-col justify-center  h-screen fixed">
  <div className=" flex flex-col items-start">
    <button className="bg-transparent hover:bg-white bg-opacity-50 hover:bg-opacity-80 hover:text-black text-white font-bold py-2 px-4 rounded text-left " onClick={() => handleButtonClick("home")}>
      Home
    </button>
    <button className="bg-transparent hover:bg-white bg-opacity-50 hover:bg-opacity-80 hover:text-black text-white font-bold py-2 px-4 rounded mt-4 text-left" onClick={() => handleButtonClick("reserve")}>
      Reserve
    </button>
    <button className="bg-transparent hover:bg-white bg-opacity-50 hover:bg-opacity-80 hover:text-black text-white font-bold py-2 px-4 rounded mt-4 text-left" onClick={() => handleButtonClick("myReservations")}>
      My Reservations
    </button>
    <button className="bg-transparent hover:bg-white bg-opacity-50 hover:bg-opacity-80 hover:text-black text-white font-bold py-2 px-4 rounded mt-4 text-left" onClick={() => handleButtonClick("addFlights")}>
      Add flights
    </button>
  </div>
</div>


  )
}

export default Leftbar