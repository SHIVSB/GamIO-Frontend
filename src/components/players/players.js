import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Players() {
  const [players, setplayers] = useState([]);
  const p = [];
  const gid = useParams();
  const gameid = gid.gameid;

  useEffect(async () => {
    // console.log(gameid);
    let isMounted = true;
    const data = (
      await axios.get("http://localhost:4000/api/v1/players/" + gameid)
    ).data.result;

    if (isMounted) setplayers(data);

    return () => {
      isMounted = false;
    };
  }, [1]);

  const fetchPlayers = async (id) => {
    const data = (await axios.get("http://localhost:4000/api/v1/" + id)).data
      .result;

    p.push(data);
    // console.log(p);
    // console.log(data);
  };

  return (
    <div>
      <h1>Helo</h1>
      {players.map((player) => {
        fetchPlayers(player);
      })}

      {console.log(p)}

      {p.map((name) => {
        return (
          <div>
            console.log(name);
            <h1>{name.firstName}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Players;
