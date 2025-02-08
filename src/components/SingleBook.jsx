/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function SingleBook() {
  const { id } = useParams();
  const navigate = useNavigate;
  const [displayedBook, setDisplayedbook] = useState([]);
  const url = `${import.meta.env.VITE_API_BASE_URL}/books/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((results) => {
        setDisplayedbook(results.data.book);
      })
      .catch((err) => console.error(err));
  }, []);

  async function handleClick() {
    const token = localStorage.getItem("token");
    const res = await axios.patch(
      url,
      { available: false },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(res);
  }

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
      {displayedBook?.available && (
        <button onClick={handleClick}>Check Out Book</button>
      )}
    </div>
  );
}

export default SingleBook;
