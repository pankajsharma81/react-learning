import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    // Homework - Not increase more than 10
    if (counter <= 9) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };
  const removeValue = () => {
    // Homework - Not decrease less than 0
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Value: {counter}</h2>
      <button onClick={addValue}>add Value</button>
      <button onClick={removeValue}>remove Value</button>
    </>
  );
}

export default App;

// useState
// useContext
// useEffect
// useReducer
// useInsertionEffect
// useLayoutEffect
