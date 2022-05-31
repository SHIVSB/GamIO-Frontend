import axios from "axios";
import React, { useEffect, useState } from "react";
// import Geocode from "react-geocode";
import Gamecard from "../../screens/gamecard/gamecard";
import home from "../../assets/images/home.png";
import avatar from "../../assets/images/avatar.png";
import category from "../../assets/images/category.png";
import profile from "../../assets/images/profile.png";
import setting from "../../assets/images/setting.png";
import logoutsym from "../../assets/images/logout.png";
import user from "../../assets/images/user.png";
import poscard from "../../assets/images/postcard.png";
import CategoryExtension from "../../screens/categoryExtension/categoryExtension";

function Dashboard() {
  const user = localStorage.getItem("user");
  const admin = localStorage.getItem("admin");

  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  const logout = async () => {
    axios.defaults.headers = {
      authorization: localStorage.getItem("token"),
    };

    try {
      const data = (await axios.post("http://localhost:4000/api/v1/logout"))
        .data.result;

      if (data.success) {
        console.log("Logged out");
      }
    } catch (error) {
      console.log(error);
    }

    localStorage.removeItem("user");
    localStorage.removeItem("userid");
    localStorage.removeItem("admin");
    localStorage.removeItem("token");

    window.location.href = "/";
  };

  return (
    <div>
      <div
        style={{}}
        className="my-4 md:my-44 lg:my-44 grid md:grid-rows-6 fixed my:0"
      >
        <a href="/">
          <img className="ml-4 h-16 w-16" src={home} />
        </a>
        <a href="/posts">
          <img className="ml-4 h-16 w-16" src={poscard} />
        </a>
        <a href="/allplayers">
          <img className="ml-4 h-16 w-16" src={avatar} />
        </a>
        <a href="/categories">
          <img className="ml-4 h-16 w-16" src={category} />
        </a>
        <a href="/profile">
          <img className="ml-4 h-16 w-16" src={profile} />
        </a>
        <a href="/settings">
          <img className="ml-4 h-16 w-16" src={setting} />
        </a>
        <button onClick={logout}>
          <img className="ml-4 h-16 w-16" src={logoutsym} />
        </button>
      </div>

      <div className="md : text-center">
        {/* <div>
          <h1>Coordinates</h1>
          <p>{status}</p>
          {lat && <p>Latitude: {lat}</p>}
          {lng && <p>Longitude: {lng}</p>}
        </div> */}
        <Gamecard />
      </div>
    </div>
  );
}

export default Dashboard;
