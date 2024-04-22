"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import style from "./style.module.css";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";
import { useRouter } from "next/navigation";


interface ReserveProps {
  reserveId: string;
  // Other props if any
}

const Reserve: React.FC<ReserveProps> = ({ reserveId }) => {
  const router = useRouter();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const [offer, setOffer] = useState<
    {
      offerId: string;
      origin: string;
      destination: string;
      cost: number;
    }
  >();
  const { toast } = useToast()

  const fetchOffer = async () => {
    try {
      console.log("fetching cur offer");
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${user.token}`,
      //   },
      // };
      console.log("reserveId ",reserveId);
      const { data } = await axios.get(
        `http://localhost:8081/offer/${reserveId}`

      );
      console.log("data in reserve id", data);
      setOffer(data);

    } catch (error) {
      toast({
        title: "Error Occured!"
      });
    }
  };

  useEffect(() => {
    fetchOffer();
    // console.log("offers currently : ",offers)
  }, []);


  const handleBooking = async () => {
    try {
      console.log("booking");
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${user.token}`,
      //   },
      // };

      const { data } = await axios.post(
        "http://localhost:8081/user/book",
        {
          offer:offer,
          passenger:passengerData
        }
      );
      console.log("data ", data);
      console.log("passanger data = ",passengerData)
      router.push("/home");
    } catch (error) {
      toast({
        title: "Error Occured!"
      });
    }
  };
  

  const [passengerData, setPassengerData] = useState<Passenger[]>([]);

  const renderPassengerInputs = () => {
    return Array.from({ length: count }, (_, i) => (
      <div key={i} className="grid w-full items-center gap-4 mb-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor={`name-${i}`}>Name (Passenger {i + 1})</Label>
          <Input 
            id={`name-${i}`}
            placeholder="Name as per your aadhar card"
            value={passengerData[i]?.name || ''}
            onChange={(e) => handleInputChange(i, 'name', e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor={`phone-${i}`}>Contact No (Passenger {i + 1})</Label>
          <Input 
            id={`phone-${i}`} 
            placeholder="Contact number"
            value={passengerData[i]?.phone || ''}
            onChange={(e) => handleInputChange(i, 'phone', e.target.value)}
          />
        </div>
      </div>
    ));
  };

  const handleInputChange = (index: number, field: keyof Passenger, value: string) => {
    setPassengerData(prevData => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [field]: value };
      return newData;
    });
  };

  return (
    <div className="flex justify-center">
      <Card className="w-[500px] bg-transparent border-none">
        <CardHeader>
          <CardTitle>Book your flight</CardTitle>
          <CardDescription>Confirm ticket in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
        <Select
            onValueChange={(newValue: any) => {
              setCount(newValue);
              // console.log(offer)
              setPrice(newValue*offer.cost)
            }}
          >
            <Label>Enter number of passengers</Label>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Enter number of passengers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
            </SelectContent>
          </Select>
          <br />
          <form>
          {renderPassengerInputs()}
          </form>
          <br />
          <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Journey date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    <br></br>
    <br></br>
          
          <div className={style.costbox}>Total Cost: ${price}</div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          {/* Adjusted layout for the CardFooter */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Continue</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will be redirected to the payment page
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleBooking}>Continue</AlertDialogAction>
                {/* // */}
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
        
      </Card>
      
    </div>
  );
}

interface Passenger {
  name: string;
  phone: string;
}

export default Reserve;
