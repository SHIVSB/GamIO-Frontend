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
      <div className="h-full flex flex-col bg-gray-100 dark:bg-gray-400  shadow-xl overflow-y-scroll">
        <div className="bg-white shadow-lg pb-3 rounded-b-3xl">
          <div className="flex  rounded-b-3xl bg-gray-100 dark:bg-gray-400 space-y-5 flex-col items-center py-7">
            <img className="h-28 w-28 rounded-full" src={image} alt="Game Image" />
            <a href="#">
              {" "}
              <span className="text-h1">{name}</span>
            </a>
          </div>
          <div className="grid px-7 py-2  items-center justify-around grid-cols-3 gap-4 divide-x divide-solid ">
            <div className="col-span-1 flex flex-col items-center ">
              <a href={"/players/" + gameid}>
                <button className="text-lg font-medium 0">Players</button>
              </a>
            </div>
            <div className="col-span-1 px-3 flex flex-col items-center ">
              <span className="text-2xl font-bold dark:text-gray-500">{genre}</span>
            </div>
            <div className="col-span-1 px-3 flex flex-col items-center ">
              <span className="text-lg font-medium">{creator}</span>
            </div>
          </div>
        </div>

        <div className="grid rounded-2xl hover:divide-solid  justify-evenly bg-gray-50 dark:white m-3 mt-10 grid-cols-3">
          <div className="col-span-1  p-3">
            <div className="flex flex-col items-center ">
              <a href="">
                {" "}
                <button className="tr-300">
                  <span className="text-lg font-medium">
                    <span className="text-2xl">Multi Player</span>
                    <br />
                    {multiplayer.toString()}
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-1  p-3">
            <div className="flex flex-col items-center ">
              <a href="">
                {" "}
                <button className="tr-300">
                  <span className="text-lg font-medium">
                    <span className="text-2xl">Single Player</span>
                    <br />
                    {singleplayer.toString()}
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-1  p-3">
            <div className="flex flex-col items-center ">
              <a href="">
                {" "}
                <button className="tr-300">
                  <span className="text-lg font-medium">
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
        
      </div>
    </div>
  );
}

export default Detail;
