/* TODO - add your code to create a functional React component that renders account details for a logged in user.
Fetch the account data from the provided API. You may consider conditionally rendering a message for other users
 that prompts them to log in or create an account.  */

import React from "react";
import axios from "axios";

function Account() {
  // try {
  //   const results = axios.get(`${import.meta.env.VITE_BASE_URL}users/me`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  // } catch (err) {}
  return <div>Welcome To Your Account Page</div>;
}
// console.log(results);

export default Account;
