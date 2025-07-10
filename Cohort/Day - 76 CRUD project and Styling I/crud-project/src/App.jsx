import { useState } from "react";
import { nanoid } from "nanoid";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todo, setTodo] = useState([
    { id: nanoid(), task: "demo-task", isCompleted: false },
  ]);

  return (
    <>
      <Create todo={todo} setTodo={setTodo} />
      <Read todo={todo} setTodo={setTodo} />
    </>
  );
};

export default App;
