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

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, DollarSign } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Reserve() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[500px] h-[550px]">
        <CardHeader>
          <CardTitle>Book your flight</CardTitle>
          <CardDescription>Confirm ticket in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name as per your aadhar card" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Contact No</Label>
                <Input id="Phone" placeholder="Contact number" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="date">Date of Journey</Label>
                <Popover>
                  <PopoverTrigger>
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50 cursor-pointer" />
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(selectedDate) => {
                        setDate(selectedDate);
                      }}
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
                {date && (
                  <div className="text-s text-black-500">
                    {date.toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          </form>
          <br />
          <Select
            onValueChange={(newValue: any) => {
              setCount(newValue);
              setPrice(newValue * 10);
            }}
          >
            <Label>Enter number of passengers</Label>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="" />
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
