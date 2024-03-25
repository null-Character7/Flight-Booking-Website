import Leftbar from "@/components/home/Leftbar";
import Mainpage from "@/components/home/Mainpage";
import React from "react";

function homepage() {
  return (
    <div className="flex">
      <div className="w-1/6   h-screen overflow-y-auto">
        <Leftbar />
      </div>
      <div className="w-5/6 border border-white border-l-4 overflow-y-auto">
        <Mainpage />
      </div>
    </div>
  );
}

export default homepage;
