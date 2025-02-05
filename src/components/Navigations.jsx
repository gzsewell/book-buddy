/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application.
You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import React from "react";
import { Link } from "react-router-dom";

function Navigations() {
  return (
    <nav className="navbar">
      <Link to="/books">Books</Link>
      <Link to="/account">Account</Link>
      <Link to="/login_page">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navigations;
