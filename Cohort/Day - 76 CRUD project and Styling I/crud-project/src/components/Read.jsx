import React from "react";
import { toast } from "react-toastify";

const Read = (props) => {
  const { todo, setTodo } = props; // best way

  const handleDelete = (id) => {
    const filterTodo = todo.filter((todo) => todo.id != id);
    setTodo(filterTodo);

    toast.error("deleted task")
  };

  const renderTodos = todo.map((todo) => {
    return (
      <li key={todo.id}>
        {todo.task} | <span onClick={() => handleDelete(todo.id)}>Delete</span>
      </li>
    );
  });

  return (
    <div>
      <ul>{renderTodos}</ul>
    </div>
  );
};

export default Read;
