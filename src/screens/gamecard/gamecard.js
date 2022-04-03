import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Gamecard() {
  const [games, setgames] = useState([]);
  const [gameid, setgid] = useState("");

  let headers = new Headers();
  headers.append("authorization", localStorage.getItem("token"));
  // const header = headers.get("authorization");

  useEffect(async () => {
    try {
      // console.log(header);
      axios.defaults.headers = {
        authorization: localStorage.getItem("token"),
      };
      const data = (
        await axios.get("http://localhost:4000/api/v1/all/allgames")
      ).data.result;

      setgames(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addToPlaying = () => {
    axios.post("http://localhost:4000/api/v1/add/addtoplaying", {
      gameid: gameid,
    });
  };

  return (
    <div>
      {games.map((game) => {
        return (
          <div className="antialiased ">
            <div className="mx-auto px-4 w-1/2 py-14">
              <div className="relative shadow-lg flex bg-white rounded-lg">
                <div className="flex-no-shrink">
                  <img
                    alt=""
                    className="w-64 px-2 py-2 h-64 block mx-auto"
                    src={game.imagelink}
                  />
                </div>
                <div className="flex-1 card-block relative">
                  <div className="p-6">
                    <h4 className="font-medium text-2xl mb-3">
                      {game.gamename}
                    </h4>
                    <p className="leading-normal">
                      Magni inventore repellat dignissimos eveniet dolore ex sit
                      illo adipisci accusamus quos.
                    </p>
                    <div className="card-block relative">
                      <a className="flex" href={"/detail/" + game._id}>
                        <button className="text-sm text-grey block mt-6 bg-green-400 rounded-lg px-2 py-2">
                          About
                        </button>
                      </a>

                      <button
                        className="mt-4 bg-blue-400 p-2 rounded-lg"
                        onClick={() => {
                          setgid(game._id);
                          addToPlaying();
                        }}
                      >
                        Add to Playing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Gamecard;
