import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./chat.css";
// import InfoBar from '../InfoBar/InfoBar';
import Input from "../input/input";
import Messages from "../Messages/Messages";
import { useParams } from "react-router-dom";
// import TextContainer from '../TextContainer/TextContainer';

let socket;

export default function Chat({ location }) {
  // const [name, setName] = useState('');
  // const [room, setRoom] = useState();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");

  const ENDPOINT = "localhost:4000";

  let { name, room } = useParams();

  useEffect(() => {
    socket = io(ENDPOINT);

    console.log(name, room);
    // setName(name);
    // setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, { name, room }]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  //    console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        {/* <InfoBar room={room}/> */}
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  );
}
