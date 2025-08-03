import React from "react";

const EvenPlayers = ({ IndianTeam }) => {
  return (
    <ul>
      {IndianTeam.filter((_, index) => index % 2 !== 0).map((player, index) => (
        <li key={index}>
          {index === 0 ? "Second" : index === 1 ? "Fourth" : "Sixth"} : {player}
        </li>
      ))}
    </ul>
  );
};

export default EvenPlayers;