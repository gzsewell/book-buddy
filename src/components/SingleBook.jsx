/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function SingleBook() {
  const { id } = useParams();
  const navigate = useNavigate;
  const [displayedBook, setDisplayedbook] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/books/${id}`)
      .then((results) => {
        console.log(results.data.book);
        setDisplayedbook(results.data.book);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="book-list">
      <img
        src={displayedBook?.coverimage}
        alt={displayedBook?.title}
        style={{ width: "200px", height: "auto" }}
      />
      <h3>{displayedBook?.title}</h3>
      <p>{displayedBook?.author}</p>
      <p>{displayedBook?.available ? "Available" : "Unavailable"}</p>
      <p>{displayedBook?.description}</p>
      <button>Check Out Book</button>
    </div>
  );
}

export default SingleBook;
