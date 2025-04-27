import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>
        Count:{count} and {count % 2 == 0 ? "Even" : "Odd"}{" "}
      </h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </>
  );
};

export default Counter;
