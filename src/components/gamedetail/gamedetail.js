import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detail() {
  const [name, setname] = useState("");
  const [genre, setgenre] = useState("");
  const [image, setimage] = useState("");
  const [creator, setcreator] = useState("");
  const [multiplayer, setmultiplayer] = useState("");
  const [singleplayer, setsingleplayer] = useState("");
  const [online, setonline] = useState("");

  const { gameid } = useParams();


  useEffect(async () => {
    axios
      .get("http://localhost:4000/api/v1/game/gamedetails/" + gameid)
      .then(function (response) {
        if (response.data.success) {
          const data = response.data.result;
          setname(data.gamename);
          setgenre(data.genre);
          setcreator(data.creator);
          setmultiplayer(data.multiplayer);
          setsingleplayer(data.singleplayer);
          setonline(data.onlinegame);
          setimage(data.imagelink);

          console.log("Details successfullly fetched");
        }
      })
      .catch(function (error) {
        console.log("Error in fetching games");

        window.location.href("/dashboard");
      });
  }, []);

  return (
    <div>
      <div class="h-full flex flex-col bg-gray-100 dark:bg-gray-700 shadow-xl overflow-y-scroll">
        <div class="ml-3 h-7 flex justify-end items-center">
          <button
            type="button"
            class="bg-gray-100 dark:bg-gray-700 m-1 p-3 justify-end rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
          >
            <span class="sr-only">Close panel</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="bg-green-300 shadow-lg pb-3 rounded-b-3xl">
          <div class="flex  rounded-b-3xl bg-gray-100 dark:bg-gray-700 space-y-5 flex-col items-center py-7">
            <img class="h-28 w-28 rounded-full" src={image} alt="Game Image" />
            <a href="#">
              {" "}
              <span class="text-h1">{name}</span>
            </a>
          </div>
          <div class="grid px-7 py-2  items-center justify-around grid-cols-3 gap-4 divide-x divide-solid ">
            <div class="col-span-1 flex flex-col items-center ">
              <a href={"/players/"+gameid}>
                <button
                  class="text-lg font-medium 0"
                >
                  Players
                </button>
              </a>
            </div>
            <div class="col-span-1 px-3 flex flex-col items-center ">
              <span class="text-2xl font-bold dark:text-gray-500">{genre}</span>
            </div>
            <div class="col-span-1 px-3 flex flex-col items-center ">
              <span class="text-lg font-medium">{creator}</span>
            </div>
          </div>
        </div>

        <div class="grid rounded-2xl divide-y divide-dashed hover:divide-solid  justify-evenly bg-gray-50 dark:bg-gray-300 m-3 mt-10 grid-cols-3">
          <div class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
              <a href="">
                {" "}
                <button class="tr-300">
                  <span class="text-lg font-medium">
                    <span className="text-2xl">Multi Player</span>
                    <br />
                    {multiplayer.toString()}
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
              <a href="">
                {" "}
                <button class="tr-300">
                  <span class="text-lg font-medium">
                    <span className="text-2xl">Single Player</span>
                    <br />
                    {singleplayer.toString()}
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
              <a href="">
                {" "}
                <button class="tr-300">
                  <span class="text-lg font-medium">
                    <span className="text-2xl">Online Game</span>
                    <br />
                    {online.toString()}
                  </span>
                </button>
              </a>
            </div>
          </div>
          {/* <div class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
              <a href="">
                <button class="tr-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-14 w-14 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span class="text-lg font-medium">Mis facturas</span>
                </button>
              </a>
            </div>
          </div> */}
          {/* <div class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
              <a href="">
                {" "}
                <button class="tr-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-14 w-14 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="text-lg font-medium">Ayuda</span>
                </button>
              </a>
            </div>
          </div> */}
          {/* <div class="col-span-1 bg-red-50 p-3">
            <div class="flex  flex-col items-center ">
              <a href="">
                {" "}
                <button class="tr-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-14 w-14 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span class="text-lg font-medium">Salir</span>
                </button>
              </a>
            </div>
          </div> */}
        </div>
        {/* 
        <div class="flex mx-auto mt-3 w-100 ">
          <a href="">
            {" "}
            <button class="p-2 shadow-lg rounded-2xl tr-300 w-100 font-medium  bg-green-500 rounded-md hover:bg-green-600 text-gray-50">
              Mejorar membresía
            </button>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Detail;
