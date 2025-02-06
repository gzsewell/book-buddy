import React from "react";

function Form({ parent, submitFunction }) {
  return (
    <form className="form-container">
      <label>
        <h3>Username</h3>
        <input type="text"></input>
      </label>
      {parent && (
        <label>
          <h3>Email</h3>
          <input type="text"></input>
        </label>
      )}

      <label>
        <h3>Password</h3>
        <input type="password"></input>
      </label>
      {parent && (
        <label>
          <h3>Confirm Password</h3>
          <input type="password"></input>
        </label>
      )}
      <button>{parent === "signup" ? "Sign Up" : "Login"}</button>
    </form>
  );
}

export default Form;
