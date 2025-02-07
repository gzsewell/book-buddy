/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. 
Fetch the book data from the provided API.
Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Books() {
  const [displayedBooks, setDisplayedBooks] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_BASE_URL}books`)
      .then((results) => {
        setDisplayedBooks(results.data.books);
        console.log("Book data", results.data.books);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="book-container">
      {displayedBooks.map((book) => (
        <Bookcard key={book.id} book={book} />
      ))}
    </div>
  );
}
function Bookcard({ book }) {
  return (
    <>
      <Link to={`/books/details/${book.id}`}>
        <div className="book-list">
          <img
            src={book.coverimage}
            alt={book.title}
            style={{ width: "200px", height: "auto" }}
          />
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <p>{book.available ? "Available" : "Unavailable"}</p>
        </div>
      </Link>
    </>
  );
}

export default Books;
