import React, { useState } from "react";
import axios from "axios";

function Namecard() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const name = {
    firstName,
    lastName,
  };

  const changeDetail = () => {
    axios.defaults.headers = {
      authorization: localStorage.getItem("token"),
    };
    axios
      .put(
        "http://localhost:4000/api/v1/updateprofile/" +
          localStorage.getItem("userid"),
        name
      )
      .then(function (response) {
        if (response.data.success) {
          window.location("/profile");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className="text-center ">
        <input
          className="border-2 border-black my-2 p-1 rounded-lg text-center"
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
        ></input>
        <br />
        <input
          className="border-2 border-black py-1 rounded-lg text-center"
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setlastName(e.target.value);
          }}
        ></input>
        <br />
        <button
          className="p-2 bg-red-500 my-2 rounded-lg"
          onClick={changeDetail}
        >
          Change Name
        </button>
      </div>
    </div>
  );
}

export default Namecard;
