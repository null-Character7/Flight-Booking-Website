"use client";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DollarSign } from "lucide-react";
import { navStateAtom } from "@/app/recoilContextProvider";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useRouter } from 'next/navigation';
import axios from "axios";
import { useToast } from "@/components/ui/use-toast"



function Mainpage() {
  const router = useRouter();
    const [navState, setNavState] = useRecoilState(navStateAtom);
    const { toast } = useToast()
    function handleButtonClick(e:string){
      const url = `/home/${e}`;
        router.push(url)
    }
    const [offers, setOffers] = useState<{ 
      _id: string;
      departure: string;
      arrival: string;
      price: number
  }[]>([]);
    const fetchOffers = async () => {
      try {
        console.log("fetch offers");
        // const config = {
        //   headers: {
        //     Authorization: `Bearer ${user.token}`,
        //   },
        // };
  
        const { data } = await axios.get(
          `http://localhost:8081/user/alloffer`
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
              onClick={() => handleButtonClick(offer._id)}
            >
              <h2 className="text-lg font-semibold mb-2">{offer.departure} to {offer.arrival}</h2>
              <h1 className="text-gray-600">Only {offer.price}</h1>
            </button>
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
