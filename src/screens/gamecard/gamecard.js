import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-spinners/RingLoader";
import GamIO from "../../assets/images/GamIO.png";

function Gamecard() {
  const [games, setgames] = useState([]);
  const [duplicategames, setduplicategames] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [allGamesfollowed, setFollowedGames] = useState([]);
  const [loading, setLoading] = useState();

  let headers = new Headers();
  headers.append("authorization", localStorage.getItem("token"));
  // const header = headers.get("authorization");

  const checkGameFollowing = (gameid) => {
    {
      // setFollowing(false);
      let check = false;
      allGamesfollowed.map((gameuserid) => {
        // console.log(gameuserid + " " + gameid);
        if (gameuserid == gameid) {
          check = true;
        }
      });

      if (check) {
        return true;
      } else {
        return false;
      }
    }
  };

  useEffect(async () => {
    try {
      // console.log(header);
      setLoading(true);
      axios.defaults.headers = {
        authorization: localStorage.getItem("token"),
      };
      const data = (
        await axios.get("http://localhost:4000/api/v1/all/allgames")
      ).data.result;

      const data2 = (
        await axios.get("http://localhost:4000/api/v1/user/getGamesFollowed")
      ).data.result;

      setFollowedGames(data2);
      setduplicategames(data);
      setLoading(false);
      setgames(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  function filterbysearch() {
    const tempgames = duplicategames.filter((game) =>
      game.gamename.toLowerCase().includes(searchKey.toLocaleLowerCase())
    );

    setgames(tempgames);
  }

  const addToPlaying = (gameid) => {
    axios.post("http://localhost:4000/api/v1/add/game/addtoplaying", {
      gameid: gameid,
    });

    window.location.href = "/dashboard";
  };

  return (
    <div>
      <div className="">
        <div className="flex justify-center pt-4 ">
          <div className=" mb-3 xl:w-96 fixed z-30 ">
            <div className="mb-2">
              <img className="mx-auto h-16 w-36 rounded-lg" src={GamIO} />
            </div>
            <input
              type="search"
              className="
        form-control
        w-full
        px-3
        py-1.5
        opacity-95
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border-2 border-solid border-gray-600
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
              placeholder="Search Games"
            />
          </div>
        </div>
        <div className="mt-12">
          {loading ? (
            <h1 className="text-center my-60">
              <Loader />
            </h1>
          ) : (
            games.map((game) => {
              return (
                <div key={game.gamename} className="antialiased">
                  <div className="mx-auto px-4 w-1/2 py-14">
                    <div className="relative shadow-lg flex-col bg-white rounded-lg">
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
                            Magni inventore repellat dignissimos eveniet dolore
                            ex sit illo adipisci accusamus quos.
                          </p>
                          <div className="md:space-x-12 sm:space-y-4 space-x-2 space-y-2">
                            <button
                              type="button"
                              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                              <a className="flex" href={"/detail/" + game._id}>
                                About
                              </a>
                            </button>

                            <button
                              type="button"
                              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                              onClick={() => {
                                addToPlaying(game._id);
                              }}
                            >
                              {checkGameFollowing(game._id) ? (
                                <span>Already Following</span>
                              ) : (
                                <span>Add to Following</span>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Gamecard;
