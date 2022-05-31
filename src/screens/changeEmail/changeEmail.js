import axios from "axios";
import react, { useState } from "react";

function ChangeEmail() {
  const [email, setEmail] = useState("");

  const emailChange = () => {
    axios.defaults.headers = {
      authorization: localStorage.getItem("token"),
    };

    axios
      .put(
        "http://localhost:4000/api/v1/updateprofile/" +
          localStorage.getItem("userid"),
        { email }
      )
      .then(function (response) {
        if (response.data.success) {
          window.location.href("/profile");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="text-center ">
        <input
          className="border-2 border-black p-1 my-2 rounded-lg"
          placeholder="Enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <button
          onClick={emailChange}
          className="bg-red-500 rounded-lg p-2 my-2"
        >
          Change Email
        </button>
      </div>
    </div>
  );
}

export default ChangeEmail;
