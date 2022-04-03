import axios from "axios";
import React, { useState } from "react";
import GamIO from "../../assets/images/GamIO.png";

function Signup() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    axios
      .post("http://localhost:4000/api/v1/signup", user)
      .then(function (response) {
        if (response.data.success) {
          window.location.href("/login");
        }
      })
      .catch(function (error) {
        console.log("Error in user signup");

        window.location.href("/signup");
      });
  };

  return (
    <div className={""}>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <div className={"text-center mb-12 grid-cols-2"}>
              <span className="float-left text-3xl text-center">Sign up</span>
              {/*<span className={"px-4 bg-slate-700 rounded-lg text-white py-2"}>*/}
              <img className={"float-right h-8 w-16 rounded-md"} src={GamIO} />
              {/*</span>*/}
            </div>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              placeholder="First Name"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              placeholder="Last Name"
            />

            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />

            <button
              type="submit"
              onClick={signup}
              className="w-full text-center py-3 rounded bg-slate-900 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="/login"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
