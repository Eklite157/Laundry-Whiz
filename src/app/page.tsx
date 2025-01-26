"use client";
import { useState } from 'react';
import LaundryCard from "@/components/LaundryCard";
import "./css/laundryroom.css"


export default function Home() {
  const laundry_time = 5;
  const [in_use, set_in_use] = useState("Available");
  let [timer, set_timer] = useState(laundry_time);

  function handleClick() {
    if (in_use == "Available") {
      set_in_use("In Use");
      set_timer(laundry_time);
      startTimer();
    } else {
      set_in_use("");
    }
  }


  //start timer for specific machine 

  function startTimer() {
    setInterval(() => {
      if (timer > 0) {
        console.log("timer > 89 timer is", timer);
        set_timer(timer--);
      } else {
        console.log("timer < 89 timer is", timer);
        set_timer(0);
      }
    }, 1000);
  }
  
  return (
    <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    <button onClick={handleClick}>this machine is in use: {in_use}</button>

    <p>there are {timer} seconds left</p>

  Whats up, hello there
<LaundryCard />
<LaundryCard />
<LaundryCard />
<LaundryCard />
<LaundryCard />
<LaundryCard />

    </div>
    </>)
}
