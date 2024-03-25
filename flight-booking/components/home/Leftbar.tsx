import React from 'react'

function Leftbar() {
  return (
    <div className="flex flex-col justify-center  h-screen fixed">
  <div className=" flex flex-col items-start">
    <button className="bg-transparent hover:bg-white bg-opacity-50 hover:bg-opacity-80 hover:text-black text-white font-bold py-2 px-4 rounded text-left">
      Home
    </button>
    <button className="bg-transparent hover:bg-white bg-opacity-50 hover:bg-opacity-80 hover:text-black text-white font-bold py-2 px-4 rounded mt-4 text-left">
      Reserve
    </button>
    <button className="bg-transparent hover:bg-white bg-opacity-50 hover:bg-opacity-80 hover:text-black text-white font-bold py-2 px-4 rounded mt-4 text-left">
      My Reservations
    </button>
    <button className="bg-transparent hover:bg-white bg-opacity-50 hover:bg-opacity-80 hover:text-black text-white font-bold py-2 px-4 rounded mt-4 text-left">
      Add flights
    </button>
  </div>
</div>


  )
}

export default Leftbar