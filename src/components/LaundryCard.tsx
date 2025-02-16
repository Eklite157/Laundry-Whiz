"use client";
import { useState } from 'react';

export default function LaundryCard() {
  const laundry_time = 3;
  const [in_use, set_in_use] = useState("Available");
  let [timer, set_timer] = useState(laundry_time);
  let running = false;

  function handleClick() {
    if (in_use == "Available") {
      set_in_use("In Use");
      set_timer(laundry_time);
      startTimer();
      running = true;
    } else {
      if (running == true) {
        running = false;
      }
      set_timer(laundry_time);
      set_in_use("Available");
    }
  }

  //start timer for specific machine 

  function startTimer() {
    var myTimer = setInterval(() => {
      if (running == true) {
        if (timer > -1) {
          //console.log(timer);
          set_timer(timer--);
        } else {
          //console.log("timer <= -1", timer); 
          set_in_use("Available");
          set_timer(laundry_time);
          running = false;
          clearInterval(myTimer);
        }
      } else {
        running = false;
        clearInterval(myTimer);
      }
    }, 1000);
  }

    return <div className="laundry-machine">
        Laundry Machine
        <img src="/images/LaundryMachine.png" width={300} height={200}/>
        <button className="btn" onClick={handleClick}>{in_use}</button>
        <figcaption className="timer-notice">There are {timer} seconds left</figcaption>
        </div>}


