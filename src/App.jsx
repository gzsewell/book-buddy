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
      <div className="default-text">
        <h1>
          <img id="logo-image" src={bookLogo} />
          Library App
        </h1>
      </div>

      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/details/:id" element={<SingleBook />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login_page" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
