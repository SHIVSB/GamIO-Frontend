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
      <div class="h-full flex flex-col bg-gray-100 dark:bg-gray-400  shadow-xl overflow-y-scroll">
        <div class="bg-white shadow-lg pb-3 rounded-b-3xl">
          <div class="flex  rounded-b-3xl bg-gray-100 dark:bg-gray-400 space-y-5 flex-col items-center py-7">
            <img class="h-28 w-28 rounded-full" src={image} alt="Game Image" />
            <a href="#">
              {" "}
              <span class="text-h1">{name}</span>
            </a>
          </div>
          <div class="grid px-7 py-2  items-center justify-around grid-cols-3 gap-4 divide-x divide-solid ">
            <div class="col-span-1 flex flex-col items-center ">
              <a href={"/players/" + gameid}>
                <button class="text-lg font-medium 0">Players</button>
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

        <div class="grid rounded-2xl hover:divide-solid  justify-evenly bg-gray-50 dark:white m-3 mt-10 grid-cols-3">
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
        </div>
      </div>
      <div>
        <div id="animation-carousel" class="relative" data-carousel="static">
          <div class="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src={image}
                class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src={image}
                class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            <div
              class="hidden duration-200 ease-linear"
              data-carousel-item="active"
            >
              <img
                src={image}
                class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src={image}
                class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src={image}
                class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
          </div>
          <button
            type="button"
            class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="hidden">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span class="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
