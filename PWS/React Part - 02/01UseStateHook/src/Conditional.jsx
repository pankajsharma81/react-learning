import { useState } from "react";

const Conditional = () => {
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  return (
    <>
      <ul>
        {todos.map((todo) => <li>{todo}</li>)}
      </ul>
    <button onClick={() => setTodos([...todos, "another one"])}>Click</button>
    </>
  );
};

export default Conditional;
