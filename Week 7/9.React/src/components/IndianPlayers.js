import React from "react";

const IndianPlayers = () => {
  const T20players = ["Virat", "Rohit", "Hardik"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Iyer"];

  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  const [first, second, ...rest] = allPlayers;

  return (
    <div>
      <h2>All Players (Merged)</h2>
      <p>First Player: {first}</p>
      <p>Second Player: {second}</p>
      <p>Rest Players: {rest.join(", ")}</p>
    </div>
  );
};

export default IndianPlayers;