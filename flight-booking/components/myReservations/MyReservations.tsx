import axios from "axios";
import React, { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import { navStateAtom, userAtom } from "@/app/recoilContextProvider";
import { useRecoilState } from "recoil";


function MyReservations() {
  const [navState, setNavState] = useRecoilState(navStateAtom);
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("userInfo"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const [reservation, setReservation] = useState<
    {
      offer: {
        cost: number;
        origin: string;
        destination: string;
      };
      date: string;
      passengers: {
        name: string;
        phone: string;
      }[]
    }[]
  >([]);
  const { toast } = useToast();
  const fetchres = async () => {
    try {
      console.log("fetch offers");
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${user.token}`,
      //   },
      // };

      const { data } = await axios.get(`http://localhost:8081/user/myreservation?phoneNumber=${user.phoneNumber}`);
      console.log("data ", data);
      setReservation(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
      });
    }
  };
  useEffect(() => {
    fetchres();
  }, [navState])
  

  return <div>
    <div className="inset-0 ">
        <h1 className="text-3xl font-bold text-center p-4 ">Your Reservations</h1>
      </div>
      <div>
    {reservation && reservation.map((reservation, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-300 p-4"
              >
                {/* First Column: Departure to Arrival */}
                <div className="flex items-center" style={{ minWidth: "30%" }}>
                  <span className="text-lg font-semibold">
                    {`${reservation.offer.origin.toUpperCase()} to ${reservation.offer.destination.toUpperCase()}`.padEnd(
                      30,
                      " "
                    )}
                  </span>
                </div>

                {/* Second Column: Price */}
                <div className="flex items-center" style={{ minWidth: "30%" }}>
                  <span className="text-lg font-semibold text-white-600">
                    Payment Done {reservation.offer.cost}
                  </span>
                </div>

                {/* third Column: date */}
                <div className="flex items-center" style={{ minWidth: "30%" }}>
                  <span className="text-lg font-semibold text-white-600">
                    Upcoming flight on {reservation.date}
                  </span>
                </div>

                {/* Third Column: Book Button */}
                <div style={{ minWidth: "10%" }}>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    // onClick={() => handleButtonClick(offer._id)}
                  >
                    Cancel Tickit
                  </button>
                </div>
              </div>
            ))}
  </div>
  </div>;
}

export default MyReservations;
