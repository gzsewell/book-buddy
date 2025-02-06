import { useState } from "react";
import bookLogo from "./assets/books.png";
import { Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Books from "./components/Books";
import Login from "./components/Login";
import Register from "./components/Register";
import Navigations from "./components/Navigations";
import "./index.css";
import SingleBook from "./components/SingleBook";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Navigations />
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>

      <p>
        Complete the React components needed to allow users to browse a library
        catalog, check out books, review their account, and return books that
        they've finished reading.
      </p>

      <p>
        You may need to use the `token` in this top-level component in other
        components that need to know if a user has logged in or not.
      </p>

      <p>
        Don't forget to set up React Router to navigate between the different
        views of your single page application!
      </p>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/details/:id" element={<SingleBook />} />
        <Route path="/login_page" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
