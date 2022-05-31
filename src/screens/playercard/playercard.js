import React, { useState, useEffect } from "react";
import axios from "axios";

function Playercard({ players, gameid }) {
  const [p, setp] = useState([]);

  return (
    <div>
      {console.log(players)}
      {/* Here */}
      {players.map((player) => {
        player.games.map((p) => {
          if({p} == gameid){
            console.log(player);
          }
        })
      })}
      {}
      {/* {p.map((player) => {
        // console.log(p);
        // return <div>{player.firstName}</div>;
      })} */}
      {/* {console.log(p)} */}
      {/* <div className="container bg-cover w-full flex justify-center items-center bg-red-300">
        <div className="w-1/2 bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
          <div className="header-card flex justify-between font-semibold">
            <div className="">Team members</div>
            <div className="flex items-center gap-x-1 text-sm text-blue-500">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <span>See all</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-cover min-h-screen w-full flex justify-center items-center bg-red-300">
        {p.map((player) => {
          return (
            <div className="w-1/2 bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
              <div className="card-content divide-y flex flex-col gap-y-3 mt-5">
                <div className="card-content-profil flex justify-between items-center">
                  <div className=" flex gap-x-2 items-center">
                    <div className="card-name-user text-xs">
                      <h3 className="font-semibold capitalize">
                        {player.firstName}
                      </h3>
                      <div className=" flex items-center gap-x-1">
                        <span className="h-3 w-3 rounded-full bg-green-500"></span>
                        <span>Online</span>
                      </div>
                    </div>
                  </div>

                  <div className="card-action">
                    <button className="flex items-center px-2 py-1 text-xs text-white bg-gray-500 hover:bg-gray-600">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        ></path>
                      </svg>
                      <span className="">Invite</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })} */}
      {/* </div> */}
    </div>
  );
}

export default Playercard;
