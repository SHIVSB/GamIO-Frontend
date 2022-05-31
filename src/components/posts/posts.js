import react, { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
  const [posts, setposts] = useState([]);
  const [username, setusername] = useState("");

  useEffect(async () => {
    axios.defaults.headers = {
      authorization: localStorage.getItem("token"),
    };
    const data = (
      await axios.get("http://localhost:4000/api/v1/all/allposts", {})
    ).data.result;
    console.log(data);
    setposts(data);
    
  }, []);

//   const printuser = (id) => {
//     const data2 = (await axios.get("http://localhost:4000/api/v1/" + id, {}))
//     .data.result;

//     setusername(data2);
//     <div>{username}</div>
//   }

  return (
    <div>
      {posts.map((post) => {
        return (
          <div class="min-h-screen bg-gray-100 flex items-center justify-center">
            <div class="px-10">
              <div class="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
                <div class="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">
                  LOGO
                </div>
                <div class="mt-4">
                  <h1 class="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
                    {post.title}
                  </h1>
                  <div class="flex mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p class="mt-4 text-md text-gray-600">{post.description}</p>
                  <div class="flex justify-between items-center">
                    <div class="mt-4 flex items-center space-x-4 py-6">
                      <div class="">
                        <img
                          class="w-12 h-12 rounded-full"
                          src={post.image}
                          alt=""
                        />
                      </div>
                      <div class="text-sm font-semibold">
                        
                        {post.user._id} •{" "}
                        <span class="font-normal"> 5 minutes ago</span>
                      </div>
                    </div>
                    <div class="p-6 bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">
                      +
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

export default Posts;
