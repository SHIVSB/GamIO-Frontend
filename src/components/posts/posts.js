import react, { useState, useEffect } from "react";
import axios from "axios";
import OriginalNavbar from "../navbar/originalNavbar";
import like from "../../assets/images/like.png";
import dislike from "../../assets/images/dislike.png";
import heart from "../../assets/images/heart.png";
import self from "../../assets/images/self.png";
import moment from "moment";

function Posts() {
  const [posts, setposts] = useState([]);
  const [players, setplayers] = useState([]);
  const [duplicateplayers, setduplicateplayers] = useState("");
  const [searchKey, setSearchKey] = useState("");

  function filterbysearch() {
    const tempplayers = duplicateplayers.filter((player) =>
      player.firstName.toLowerCase().includes(searchKey.toLocaleLowerCase())
    );

    setplayers(tempplayers);
  }

  const addComment = () => {};

  useEffect(async () => {
    axios.defaults.headers = {
      authorization: localStorage.getItem("token"),
    };
    const data = (
      await axios.get("http://localhost:4000/api/v1/all/allposts", {})
    ).data.result;

    const data2 = (
      await axios.get("http://localhost:4000/api/v1/all/allplayers", {})
    ).data.result;
    // console.log(data);

    setduplicateplayers(data);
    setplayers(data);

    // console.log(data);
    setposts(data);
  }, []);

  const likePost = async (postId) => {
    await axios
      .post("http://localhost:4000/api/v1/likepost", { postId: postId })
      .then(function (response) {
        if (response.data.success) {
          console.log("done");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const disLikePost = async (postId) => {
    await axios
      .post("http://localhost:4000/api/v1/dislikepost", { postId: postId })
      .then(function (response) {
        if (response.data.success) {
          console.log("done");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //   const printuser = (id) => {
  //     const data2 = (await axios.get("http://localhost:4000/api/v1/" + id, {}))
  //     .data.result;

  //     setusername(data2);
  //     <div>{username}</div>
  //   }

  return (
    <div>
      <OriginalNavbar />

      <div className="grid justify-center mx-auto inset-x-0 w-64 grid-rows-2 text-center lg:invisible visible bg-white shadow-lg fixed mt-20">
        <div className="py-2 px-4 grid grid-rows-2">
          <div className="bg-slate-800 px-1 py-1 text-white rounded-md text-center">
            Search by Player
          </div>
          <input
            className="shadow-lg rounded-sm text-center"
            placeholder="Player Name"
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-400 text-white my-4 rounded-md py-1 px-2">
          Search
        </button>
      </div>

      <div className="">
        <div className="float text-center float-none lg:visible invisible rounded-lg bg-white shadow-lg md:float-left fixed ml-32 md:mt-48 mt-20">
          <div className="my-2 text-2xl">Filter</div>
          <div className="py-2 px-4">
            <div className="bg-slate-800 px-1 py-1 text-white mb-2 rounded-md text-center">
              Search by Player
            </div>
            <input
              value={searchKey}
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
              className="py-1 shadow-lg rounded-sm text-center"
              placeholder="Player Name"
            />
          </div>
          <div className="py-2 px-4">
            <div className="bg-slate-800 px-1 py-1 text-white mb-2 rounded-md text-center">
              Search by Date
            </div>
            <input
              className="py-1 shadow-lg rounded-sm text-center"
              placeholder="Select Date"
            />
          </div>
          <div className="py-2 px-4">
            <div className="bg-slate-800 px-1 py-1 text-white mb-2 rounded-md text-center">
              Search by Keyword
            </div>
            <input
              className="py-1 shadow-lg rounded-sm text-center"
              placeholder="Player Name"
            />
          </div>

          <button
            onClick={filterbysearch}
            className="bg-blue-500 hover:bg-blue-400 text-white my-4 rounded-md py-1 px-2"
          >
            Search
          </button>
        </div>
        <div className="">
          {posts.map((post) => {
            return (
              <div className="bg-gray-100 flex mx-auto items-center justify-center">
                <div className="mt-24 w-96">
                  <div className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
                    <div className="mt-4 flex items-center space-x-4 py-6">
                      <div className="">
                        <img
                          className="w-12 h-12 rounded-full"
                          src={post.user.profilePhoto}
                          alt=""
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        {post.user.firstName.toUpperCase()} •{" "}
                        <span className="font-normal">
                          {" "}
                          {moment(post.createdAt).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
                        {post.title}
                      </h1>
                      <div className="flex mt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p className="mt-4 text-md text-gray-600">
                        {post.description}
                      </p>
                      <div className="ml-8 grid grid-cols-3 mt-4">
                        <button className="items-center justify-center h-12 w-16">
                          {post.isLiked ? (
                            <img
                              onClick={() => {
                                likePost(post._id);
                              }}
                              className="h-12 opacity-100 hover:w-16 hover:h-16"
                              src={heart}
                            />
                          ) : (
                            <img
                              onClick={() => {
                                likePost(post._id);
                              }}
                              className="h-12 opacity-40 hover:w-16 hover:h-16"
                              src={like}
                            />
                          )}
                        </button>
                        <button className="p-6 opacity-40 hover:opacity-100 bg-yellow-400 rounded-full hover:h-16 hover:w-16 h-4 w-4 flex items-center justify-center text-2xl text-white shadow-lg cursor-pointer">
                          +
                        </button>
                        <button className="items-center justify-center h-12 w-16">
                          {post.isDisLiked ? (
                            <img
                              onClick={() => {
                                disLikePost(post._id);
                              }}
                              className="h-12 opacity-100 hover:w-16 hover:h-16"
                              src={self}
                            />
                          ) : (
                            <img
                              onClick={() => {
                                disLikePost(post._id);
                              }}
                              className="h-12 opacity-40 hover:w-16 hover:h-16"
                              src={dislike}
                            />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
