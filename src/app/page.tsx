"use client";
import { useState } from 'react';
import LaundryCard from "@/components/LaundryCard";
import "./css/laundryroom.css"


export default function Home() {
  const laundry_time = 5;
  const [in_use, set_in_use] = useState("no");
  let [timer, set_timer] = useState(laundry_time);

  function handleClick() {
    if (in_use == "no") {
      set_in_use("yes");
      set_timer(laundry_time);
      startTimer();
    } else {
      set_in_use("no");
    }
  }

  function startTimer() {
    setInterval(() => {
      if (timer > 0) {
        console.log("timer > 89 timer is", timer);
        set_timer(timer--);
      } else {
        console.log("timer < 89 timer is", timer);
        set_timer(laundry_time);
      }
    }, 1000);
  }


  return (
    <>
    <div>

    <h1> Laundry Room </h1>

    <button onClick={handleClick}>this machine is in use: {in_use}</button>
    <p>there are {timer} seconds left</p>

  
    <div className="laundry-container">
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />
    <LaundryCard />

    </div>

    </div>
    </>)
}
