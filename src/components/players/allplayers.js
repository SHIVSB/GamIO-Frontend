import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-spinners/RingLoader";
import videocall from "../../assets/images/video-call.png";

function Allplayers() {
  const [players, setplayers] = useState([]);
  const [duplicateplayers, setduplicateplayers] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [loading, setLoading] = useState();

  var sortAlphabets = function (text) {
    return text.split("").sort().join("");
  };

  function filterbysearch() {
    const tempplayers = duplicateplayers.filter((player) =>
      player.firstName.toLowerCase().includes(searchKey.toLocaleLowerCase())
    );

    setplayers(tempplayers);
  }

  useEffect(async () => {
    setLoading(true);
    axios.defaults.headers = {
      authorization: localStorage.getItem("token"),
    };
    const data = (
      await axios.get("http://localhost:4000/api/v1/all/allplayers", {})
    ).data.result;
    // console.log(data);
    setduplicateplayers(data);
    setLoading(false);
    setplayers(data);
  }, []);

  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-slate-900 p-6">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="fixed bg-black rounded-md">
            <a
              href="/dashboard"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-gray-500 mt-4 lg:mt-0"
            >
              Dashboard
            </a>
          </div>
        </div>
      </nav>

      <div class="flex justify-center pt-12">
        <div class="mb-3 xl:w-96">
          <input
            type="search"
            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        text-center
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleSearch"
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            onKeyUp={filterbysearch}
            value={searchKey}
            placeholder="Search Players"
          />
        </div>
      </div>
      {loading ? (
        <h1 className="text-center my-60">
          <Loader />
        </h1>
      ) : (
        players.map((player) => {
          return (
            <div class="mx-5 min-h-screen grid place-content-center">
              <div class="bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
                <h1 class="text-3xl mb-3 uppercase">{player.firstName}</h1>
                <p class="text-lg">
                  You can contact us whenever you need help or just curious
                  about something.
                </p>
              </div>
              <div class="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
                <h2 class="font-semibold text-2xl mb-6">Connect</h2>
                <img
                  class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
                  src={player.profilePhoto}
                  alt="User avatar"
                />
                <p class="capitalize text-xl mt-1">{player.firstName}</p>
                <span class="flex items-center text-center border rounded-full w-24  justify-center mx-auto mt-2 mb-12">
                  {player.active ? (
                    <div className="flex">
                      <div className=" bg-green-400 rounded-full mt-2 w-2.5 h-2.5 block mr-2"></div>
                      <div className="">Active</div>
                    </div>
                  ) : (
                    <div className="flex">
                      <div className=" bg-red-400 rounded-full mt-2 w-2.5 h-2.5 block mr-2"></div>
                      <div className="">Inactive</div>
                    </div>
                  )}
                </span>
                <div className="flex flex-col">
                  <div className="self-center">
                    <a href="/videocall">
                      <img className="h-16 w-16" src={videocall} />
                    </a>
                  </div>
                  <Link
                    to={`/chat?name=${localStorage.getItem(
                      "user"
                    )}&room=${sortAlphabets(
                      player.firstName.toLowerCase() +
                        localStorage.getItem("user").toLowerCase()
                    )}`}
                  >
                    <button class="rounded-md bg-gradient-to-r from-gray-600 to-gray-800 text-xl text-white pt-3 pb-4 px-8 inline">
                      Send a message
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Allplayers;
