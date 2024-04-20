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
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, DollarSign } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";

interface ReserveProps {
  reserveId: string;
  // Other props if any
}

const Reserve: React.FC<ReserveProps> = ({ reserveId }) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const { toast } = useToast()
  const fetchOfferDetails = async () => {
    try {
      console.log("fetch offer details");
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${user.token}`,
      //   },
      // };

      const { data } = await axios.get(
        `http://localhost:8081/offer?offerId=${reserveId}`
      );
      console.log("data ", data);
      
    } catch (error) {
      toast({
        title: "Error Occured!"
      });
    }
  };
  

  const renderPassengerInputs = () => {
    const passengerInputs = [];
    for (let i = 1; i <= count; i++) {
      passengerInputs.push(
        <div key={i} className="grid w-full items-center gap-4 mb-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor={`name-${i}`}>Name (Passenger {i})</Label>
            <Input id={`name-${i}`} placeholder="Name as per your aadhar card" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor={`phone-${i}`}>Contact No (Passenger {i})</Label>
            <Input id={`phone-${i}`} placeholder="Contact number" />
          </div>
        </div>
      );
    }
    return passengerInputs;
  };

  return (
    <div className="flex justify-center">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Book your flight</CardTitle>
          <CardDescription>Confirm ticket in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
        <Select
            onValueChange={(newValue: any) => {
              setCount(newValue);
              setPrice(newValue * 10);
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
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Reserve;
