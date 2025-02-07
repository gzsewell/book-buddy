import React from "react";

function Authenticate() {
  async function handleClick() {
    try {
      const results = await axios(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(results);
    } catch (err) {}
  }

  return <div>Authenticate</div>;
}

export default Authenticate;
