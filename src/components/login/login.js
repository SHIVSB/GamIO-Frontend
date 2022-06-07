import axios from "axios";
import React, { useState } from "react";
import Loader from "react-spinners/RingLoader";
import Error from "../../screens/Loaders/Error";
import Success from "../../screens/Loaders/Success";
import username from "../../assets/images/username.svg";
import lock from "../../assets/images/lock.svg";
import login_back from "../../assets/images/login_back.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  let headers = new Headers();

  const login = async () => {
    const user = {
      email,
      password,
    };

    await axios
      .post("http://localhost:4000/api/v1/signin", user)
      .then(function (response) {
        setLoading(true);
        if (response.data.success) {
          setLoading(false);
          setSuccess(true);

          headers.set("authorization", "Bearer" + " " + response.data.token);
          localStorage.setItem("token", "Bearer " + response.data.token);
          // console.log(localStorage.getItem("token"))
          localStorage.setItem("user", response.data.result.firstName);
          localStorage.setItem("userid", response.data.result._id);
          localStorage.setItem("admin", response.data.result.isAdmin);
          window.location.href = "/dashboard";
        }
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
        window.location.href = "/login";
        setError(true);
      });
  };
  return (
    <div>
      <div className="mt-48 text-center">
        {loading && <Loader />}
        {error && <Error />}
        {success && <Success message="Login successful" />}
        <div
          // style={{ backgroundImage: `url(${login_back})` }}
          id="whoobe-t7qyk"
          className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/3 m-auto"
        >
          <h2 className="text-2xl my-4">Login</h2>
          <div
            id="whoobe-h90kl"
            className="w-full p-2 justify-start flex flex-col"
          >
            <div id="whoobe-7izhv" className=" flex flex-row">
              <span
                id="whoobe-plfl9"
                className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0"
                mode="render"
                block=""
              >
                <img className="h-8" src={username} />
              </span>
              <input
                value={email}
                className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1"
                id="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required={true}
                placeholder="useremail"
              />
            </div>

            <div id="whoobe-l6k6r" className="my-4 flex flex-row">
              <span
                id="whoobe-4occ6"
                className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0"
                mode="render"
                block=""
              >
                <img className="h-8" src={lock} />
              </span>
              <input
                type="password"
                value={password}
                className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1"
                id="password"
                name="password"
                required={true}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="password"
              />
            </div>
            <button
              value="button"
              className="px-4 py-2 rounded bg-black text-white hover:bg-blue-700 my-4 w-full"
              id="whoobe-ibemp"
              onClick={login}
            >
              Login
            </button>
            <div>
              <span className="text-green-500">No account yet? </span>
              <a href="/signup">
                <span className="text-blue-400 hover:text-blue-700">
                  Sign Up
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
