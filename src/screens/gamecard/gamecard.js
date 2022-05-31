import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "react-spinners/RingLoader";

function Gamecard() {
  const [games, setgames] = useState([]);
  const [gameid, setgid] = useState("");
  const [duplicategames, setduplicategames] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [checkFollowing, setFollowing] = useState(false);
  const [loading, setLoading] = useState();

  let headers = new Headers();
  headers.append("authorization", localStorage.getItem("token"));
  // const header = headers.get("authorization");

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

  const addToPlaying = () => {
    axios.post("http://localhost:4000/api/v1/add/addtoplaying", {
      gameid: gameid,
    });
  };

  return (
    <div>
      <div className="flex justify-center pt-12">
        <div className=" mb-3 xl:w-96 fixed z-30 ">
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
      {loading ? (
        <h1 className="text-center my-60">
          <Loader />
        </h1>
      ) : (
        games.map((game) => {
          return (
            <div className="antialiased">
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
                        Magni inventore repellat dignissimos eveniet dolore ex
                        sit illo adipisci accusamus quos.
                      </p>
                      <div className="md:space-x-12 sm:space-y-4 space-x-2 space-y-2">
                        <button className=" text-sm text-grey mt-6 bg-green-400  rounded-lg p-2">
                          <a className="flex" href={"/detail/" + game._id}>
                            About
                          </a>
                        </button>

                        <button
                          className=" text-sm bg-blue-400 p-2 rounded-lg"
                          onClick={() => {
                            setgid(game._id);
                            addToPlaying();
                          }}
                        >
                          {checkFollowing ? (
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
  );
}

export default Gamecard;
