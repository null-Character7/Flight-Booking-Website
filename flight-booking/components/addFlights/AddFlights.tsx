import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "../ui/label";
import axios from "axios";
import { useToast } from "../ui/use-toast";

function AddFlights() {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [arrival, setArrival] = useState("");
  const [destination, setDestination] = useState("");
  const [cost, setCost] = useState<number>();

  const handleSubmit = async () => {
    try {
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${user.token}`,
      //   },
      // };
      console.log(cost)
      console.log(arrival)
      console.log(destination)

      const { data } = await axios.post(
        "http://localhost:8081/offer/addoffer",
        {
          offerId: "3",
          cost: cost,
          origin: arrival,
          destination: destination,
        }
      );
      console.log("data ", data);
    } catch (error) {
      toast({
        title: "Error Occured!",
      });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Card className="w-[500px] bg-transparent border-none">
        <CardHeader>
          <CardTitle>Add flight offers</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            name="arrivalPlace"
            placeholder="Enter Arrival Place"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
          <br />
          <Input
            name="destinationPlace"
            placeholder="Enter Destination Place"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <br />
          <Input
            name="discountPrice"
            placeholder="Enter Discount Price"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
          />
          <br />
          <Label>Offer valid till</Label>

          <br></br>
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
                {date ? format(date, "PPP") : <span>Offer valid till</span>}
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
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          {/* Adjusted layout for the CardFooter */}
          <Button onClick={handleSubmit}>Add offer</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AddFlights;
