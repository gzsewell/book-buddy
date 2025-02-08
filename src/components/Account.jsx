/* TODO - add your code to create a functional React component that renders account details for a logged in user.
Fetch the account data from the provided API. You may consider conditionally rendering a message for other users
 that prompts them to log in or create an account.  */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Bookcard from "./Bookcard";
import { useLocation } from "react-router-dom";

function Account() {
  const token = localStorage.getItem("token");
  const [reservations, setReservations] = useState(null);
  const location = useLocation();
  const onAccountPage = location.pathname === "/account";
  const url = `${import.meta.env.VITE_API_BASE_URL}reservations`;

  async function getData() {
    try {
      const results = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReservations(results.data);
      console.log(results.data);
    } catch (err) {}
  }

  useEffect(() => {
    getData();
  }, []);

  async function handleReturn(reservationId) {
    try {
      const response = await axios.delete(`${url}/${reservationId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        getData();
      }
    } catch (error) {}
  }

  return (
    <div>
      <h1>Welcome To Your Account Page</h1>
      <h2>Your Checkout Books</h2>
      <div className="book-container">
        {reservations?.reservation.map((book) => (
          <Bookcard
            key={book.id}
            book={book}
            onAccountPage={onAccountPage}
            handleReturn={handleReturn}
          />
        ))}
      </div>
    </div>
  );
}

export default Account;
