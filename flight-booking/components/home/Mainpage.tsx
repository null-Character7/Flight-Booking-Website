"use client";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

function Mainpage() {
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 2,
      title: "Buy One Get One Free",
      description: "Buy one, get one free offer on selected items",
    },
    {
      id: 3,
      title: "Limited Time Offer",
      description: "Hurry up! Limited time offer on electronics",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },

    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },

    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },

    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },

    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all products",
    },
  ]);

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
              <h2 className="text-lg font-semibold mb-2">{offer.title}</h2>
              <p className="text-gray-600">{offer.description}</p>
            </button>
          ))}
        </div>
      </ScrollArea>
      </div>
      
    </div>
  );
}

export default Mainpage;
