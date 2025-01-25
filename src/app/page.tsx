"use client";
import { useState } from 'react';
import LaundryCard from "@/components/LaundryCard";

export default function Home() {
  const [in_use, set_in_use] = useState("no");

  function handleClick() {
    if (in_use == "no") {
      set_in_use("yes")
    } else {
      set_in_use("no");
    }
  }
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    <button onClick={handleClick}>this machine is in use: {in_use}</button>

  Whats up, hello there
<LaundryCard />
<LaundryCard />
<LaundryCard />
<LaundryCard />
<LaundryCard />
<LaundryCard />

    </div>
  );
}
