import React, { useState } from "react";
import "./HotelBookingForm.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Link } from "react-router-dom";
const HotelBookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const addUser = async (
    name,
    email,
    checkInDate,
    checkOutDate,
    numberOfGuests
  ) => {
    await addDoc(collection(db, "customers"), {
      name,
      email,
      checkInDate,
      checkOutDate,
      numberOfGuests,
    });
  };

  return (
    <div>
      <h1>Hotel Booking</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Check-in Date:
          <input
            type="date"
            name="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Check-out Date:
          <input
            type="date"
            name="checkOutDate"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Number of Guests:
          <input
            type="number"
            name="numberOfGuests"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
            required
          />
        </label>
        <br />

        <br />

        <Link to='/getdata'><button
          type="submit"
          onClick={() =>
            addUser(name, email, checkInDate, checkOutDate, numberOfGuests)
          }
        >
          Submit
        </button></Link>
      </form>
    </div>
  );
};

export default HotelBookingForm;
