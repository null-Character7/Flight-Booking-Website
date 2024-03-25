"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  } from "@/components/ui/alert-dialog"
  
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { CalendarIcon } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
  

function reservepage() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
<div className="flex justify-center items-center h-screen">
    <Card className="w-[500px] h-[500px]">
      <CardHeader>
        <CardTitle>Book your flight</CardTitle>
        <CardDescription>confirm tickit in one-click.</CardDescription>
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
        <div className="text-s text-black-500">{date.toLocaleDateString()}</div>
      )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
      <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Book</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
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
  )
}

export default reservepage