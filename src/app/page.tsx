"use client";
import LaundryCard from "@/components/LaundryCard";
import "./css/laundryroom.css"
//import "./css/loginpage.css"

export default function Home() {

  var auth = false;
  if (!auth) {
    return (
      <>
      <h1> Login Page </h1>

      <div className="login-page">
        <p> Username: </p>

      </div>
      </>
    )
  } else {
    return (
      <>
      <h1> Laundry Room </h1>

      <div className="laundry-room">
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
      </>)
  }
}

