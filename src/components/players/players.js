import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Playercard from "../../screens/playercard/playercard";

function Players() {
  const [players, setplayers] = useState([]);

  const gid = useParams();
  const gameid = gid.gameid;

  useEffect(async () => {
    axios.defaults.headers = {
      authorization: localStorage.getItem("token"),
    };
    const data = (
      await axios.get("http://localhost:4000/api/v1/all/allplayers", {})
    ).data.result;

    setplayers([data]);
    
  }, []);

  return (
    <div>
      {/* {console.log(players)} */}

      
      {players.map((player) => {
        return (
          <div>
            {player.map((p) => {
              return (
                <div>
                  {p.games.map((ifgame) => {
                    return (
                      <div>
                        {ifgame == gameid ? (
                          <div class="mx-5 min-h-screen grid place-content-center">
                            <div class="bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
                              <h1 class="text-3xl mb-3 uppercase">
                                {p.firstName}
                              </h1>
                              <p class="text-lg">
                                You can contact us whenever you need help or
                                just curious about something.
                              </p>
                            </div>
                            <div class="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
                              <h2 class="font-semibold text-2xl mb-6">
                                Connect
                              </h2>
                              <img
                                class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
                                src={p.profilePhoto}
                                alt="User avatar"
                              />
                              <p class="capitalize text-xl mt-1">
                                {p.firstName}
                              </p>
                              <span class="flex items-center text-center border rounded-full w-24  justify-center mx-auto mt-2 mb-12">
                                {p.active ? (
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

                              <button class="rounded-md bg-gradient-to-r from-gray-600 to-gray-800 text-xl text-white pt-3 pb-4 px-8 inline">
                                Send a message
                              </button>
                            </div>
                          </div>
                        ) : (
                          console.log("Not Equal")
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Players;
