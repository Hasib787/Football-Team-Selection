import React, { useState } from "react";
import { useEffect } from "react";
import playersData from "../../FakeData/playersData.json";
import Player from "../Player/Player";
import "./Players.style.css";
import PlayersCart from "./PlayersCart/PlayersCart";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [addPlayer, setAddPlayer] = useState([]);

  useEffect(() => {
    setPlayers(playersData);
  }, []);

//   const handleAddPlayer = (player) => {
//     if (addPlayer.length < 10) {
//       const newPlayer = [...addPlayer, player];
//       setAddPlayer(newPlayer);
//     }else{
//         alert("You can't add more than 10 players")
//         return;
//     }
//   };
  
  

  return (
    <div style={{ display: "flex", margin: "20px" }}>
      <div>
        <h1>Football Team</h1>
        <div className="player-container">
          {players.map((player) => (
            <Player
              player={player}
              key={player.id}
            />
          ))}
        </div>
      </div>
      {/* <div>
        <PlayersCart playerCart={addPlayer} />
      </div> */}
    </div>
  );
};

export default Players;
