import React from "react";

const ListofPlayers = ({ players }) => {
  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>
          Mr. {player.name} {player.score}
        </li>
      ))}
    </ul>
  );
};

export default ListofPlayers;