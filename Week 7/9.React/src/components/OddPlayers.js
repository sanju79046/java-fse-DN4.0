import React from "react";

const OddPlayers = ({ IndianTeam }) => {
  return (
    <ul>
      {IndianTeam.filter((_, index) => index % 2 === 0).map((player, index) => (
        <li key={index}>
          {index === 0 ? "First" : index === 1 ? "Third" : "Fifth"} : {player}
        </li>
      ))}
    </ul>
  );
};

export default OddPlayers;