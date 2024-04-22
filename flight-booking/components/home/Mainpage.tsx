"use client";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DollarSign } from "lucide-react";
import { navStateAtom } from "@/app/recoilContextProvider";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

function Mainpage() {
  const router = useRouter();
  const [navState, setNavState] = useRecoilState(navStateAtom);
  const { toast } = useToast();
  function handleButtonClick(e: string) {
    const url = `/home/${e}`;
    router.push(url);
  }
  const [offers, setOffers] = useState<
    {
      offerId: string;
      origin: string;
      destination: string;
      cost: number;
    }[]
  >([]);
  const fetchOffers = async () => {
    try {
      console.log("fetch offers");
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${user.token}`,
      //   },
      // };

      const { data } = await axios.get(
        `http://localhost:8081/offer/alloffer`
      );
      console.log("data ", data);
      setOffers(data);

    } catch (error) {
      toast({
        title: "Error Occured!"
      });
    }
  };
  useEffect(() => {
    fetchOffers();
    console.log("offers currently : ",offers)
  }, []);

  return (
    <div>
      <div className="inset-0  ">
        <h1 className="text-3xl font-bold text-center p-4 ">Ongoing offers</h1>
      </div>
      <div>
        <ScrollArea>
          <div className="grid grid-cols-1 gap-4">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-300 p-4"
              >
                {/* First Column: Departure to Arrival */}
                <div className="flex items-center" style={{ minWidth: "40%" }}>
                  <span className="text-lg font-bold text-black">
                    {`${offer.destination.toUpperCase()} to ${offer.origin.toUpperCase()}`}
                  </span>
                </div>

                {/* Second Column: Price */}
                <div className="flex items-center" style={{ minWidth: "40%" }}>
                  <span className="text-lg font-semibold text-white-600">
                    Only {offer.cost}
                  </span>
                </div>

                {/* Third Column: Book Button */}
                <div style={{ minWidth: "20%" }}>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleButtonClick(offer.offerId)}
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

interface Offer {
  _id: string;
  departure: string;
  arrival: string;
  price: number;
}

export default Mainpage;
