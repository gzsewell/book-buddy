import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Form({ parent, submitFunction }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    password: "",
    "confirmed-passord": "",
    email: "",
  });
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("subbmitting data...");
    console.log(formData);
    const endPoint = parent ? "registern" : "login";
    try {
      const data = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}users/${endPoint}`,
        {
          firstname: formData?.username ? formData.username : "",
          lastname: formData?.lastname ? formData.lastname : "",
          email: formData.email,
          password: formData.password,
        }
      );
      console.log(data);
      if (data.status === 200) {
        localStorage.setItem("token", data.data.token);
        navigate("/account");
      }
    } catch (error) {}
    setFormData({ username: "", lastname: "", password: "", email: "" });
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        <h3>Username</h3>
        <input
          type="text"
          name="username"
          onChange={handleInput}
          value={formData?.username}
        ></input>
      </label>
      <label>
        <h3>Last Name</h3>
        <input
          type="text"
          name="lastname"
          onChange={handleInput}
          value={formData?.lastname}
        ></input>
      </label>

      <label>
        <h3>Email</h3>
        <input
          type="text"
          name="email"
          onChange={handleInput}
          value={formData?.email}
        ></input>
      </label>

      <label>
        <h3>Password</h3>
        <input
          type="password"
          name="password"
          onChange={handleInput}
          value={formData?.password}
        ></input>
      </label>
      {parent && (
        <label>
          <h3>Confirm Password</h3>
          <input
            type="password"
            name="confirmed-password"
            onChange={handleInput}
          ></input>
        </label>
      )}
      <button>{parent === "signup" ? "Sign Up" : "Login"}</button>
    </form>
  );
}

export default Form;
