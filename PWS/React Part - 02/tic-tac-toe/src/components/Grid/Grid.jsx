import React from "react";
import { useState } from "react";
import "./Grid.css"
import Card from "../Card/card";

const Grid = ({numberOfCards}) => {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  return (
    <div className="grid">
      {board.map((el, idx) => (
        <Card key={idx} />
      ))}
    </div>
  );
};

export default Grid;
