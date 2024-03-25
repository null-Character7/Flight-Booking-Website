"use client";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DollarSign } from "lucide-react";

function Mainpage() {
  const [offers, setOffers] = useState([{
    departure: "New York",
    arrival: "Los Angeles",
    price: 250,
    hh: "12",
    mm: "00",
    ss: "00",
  },
  {
    departure: "London",
    arrival: "Paris",
    price: 180,
    hh: "15",
    mm: "30",
    ss: "00",
  },
  {
    departure: "Tokyo",
    arrival: "Sydney",
    price: 500,
    hh: "10",
    mm: "45",
    ss: "00",
  },]);

  return (
    <div>
      <div className="inset-0 border border-gray-300 ">
        <h1 className="text-3xl font-bold text-center p-4 ">
          Ongoing offers
        </h1>
      </div>
      <div>
      <ScrollArea>
        <div className="grid grid-cols-3 gap-4">
          {offers.map((offer, index) => (
            <button
              key={index}
              className="bg-transparent border border-gray-300 rounded p-4 mb-4"
              // onClick={() => handleButtonClick(offer)}
            >
              <h2 className="text-lg font-semibold mb-2">{offer.departure} to {offer.arrival}</h2>
              <h1 className="text-gray-600">Only {offer.price}</h1>
              <p className="text-gray-600">valid till {offer.hh}:{offer.mm}:{offer.ss} only</p>
            </button>
          ))}
        </div>
      </ScrollArea>
      </div>
      
    </div>
  );
}

export default Mainpage;
