import { useReducer } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";
import TodoDispatchContext from "./context/TodoDispatchContext";
import todoReducer from "./reducers/todoReducer";

function App() {
  // const [list, setList] = useState([
  //   { id: 1, todoData: "todo 1", finished: false },
  //   { id: 2, todoData: "todo 2", finished: false },
  // ]);

  const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <AddTodo />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
