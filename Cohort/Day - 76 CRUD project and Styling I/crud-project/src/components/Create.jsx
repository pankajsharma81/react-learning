import { useState } from "react";
import { nanoid } from "nanoid";

// add Task ..........................................................................
const Create = (props) => {
  const todo = props.todo;
  const setTodo = props.setTodo;
  const [task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      id: nanoid(),
      task: task,
      isCompleted: false,
    };
    const copytodos = [...todo];
    copytodos.push(newTask);
    setTodo(copytodos);

    setTask("");
  };

  return (
    <div>
      <h1 style={{color:"red"}}>Todo</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default Create;
