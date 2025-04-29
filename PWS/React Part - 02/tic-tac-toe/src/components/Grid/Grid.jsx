import Card from "../Card/card";
import "./Grid.css";

import { useState } from "react";

const Grid = ({ numberOfCards }) => {
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
