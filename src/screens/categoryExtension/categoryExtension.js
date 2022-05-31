import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CategoryExtension() {
  const [games, setgames] = useState([]);
  const [gameid, setgid] = useState("");
  const [duplicategames, setduplicategames] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [checkFollowing, setFollowing] = useState(false);

  let headers = new Headers();
  headers.append("authorization", localStorage.getItem("token"));
  // const header = headers.get("authorization");

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

  const filteredGames = async () => {
    try {
      axios.defaults.headers = {
        authorization: localStorage.getItem("token"),
      };

      const data = (
        await axios.get(
          "http://localhost:4000/api/v1/filter/games/" +
            localStorage.getItem("genre")
        )
      ).data.result;

      setduplicategames(data);
      setgames(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="float float-left">
        <a href="/dashboard">
          <button className="fixed bg-gray-900 text-white py-4 px-2 ml-2 rounded-md">Dashboard</button>
        </a>
      </div>
      <div className="justify-center flex flex-row my-2">
        <button
          className="py-4 px-6 bg-gray-300 shadow-lg mx-2 rounded-sm"
          onClick={() => {
            localStorage.removeItem("genre");
            localStorage.setItem("genre", "Action");
            filteredGames();
          }}
        >
          Action
        </button>

        <button
          className="py-4 px-6 bg-gray-300 shadow-lg mx-2 rounded-sm"
          onClick={() => {
            localStorage.removeItem("genre");
            localStorage.setItem("genre", "Crime");
            filteredGames();
          }}
        >
          Crime
        </button>
        <button
          className="py-4 px-6 bg-gray-300 shadow-lg mx-2 rounded-sm"
          onClick={() => {
            localStorage.removeItem("genre");
            localStorage.setItem("genre", "Arcade");
            filteredGames();
          }}
        >
          Arcade
        </button>
        <button
          className="py-4 px-6 bg-gray-300 shadow-lg mx-2 rounded-sm"
          onClick={() => {
            localStorage.removeItem("genre");
            localStorage.setItem("genre", "Racing");
            filteredGames();
          }}
        >
          Racing
        </button>
        <button
          className="py-4 px-6 bg-gray-300 shadow-lg mx-2 rounded-sm"
          onClick={() => {
            localStorage.removeItem("genre");
            localStorage.setItem("genre", "Adventure");
            filteredGames();
          }}
        >
          Adventure
        </button>
      </div>
      <div></div>
      <div className="flex justify-center pt-12">
        <div className="mb-3 xl:w-96">
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
            placeholder="Search Games"
          />
        </div>
      </div>
      {games.map((game) => {
        return (
          <div className="antialiased ">
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
                      Magni inventore repellat dignissimos eveniet dolore ex sit
                      illo adipisci accusamus quos.
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
      })}
    </div>
  );
}

export default CategoryExtension;
