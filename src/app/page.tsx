"use client";
import LaundryCard from "@/components/LaundryCard";

function handleClick() {
  console.log('something is happening');
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    <button onClick={handleClick}>this is a button</button>

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
