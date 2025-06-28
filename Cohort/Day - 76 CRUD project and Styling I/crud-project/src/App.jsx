import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "study", isCompleted: false },
  ]);

  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(true);
  const [gender, setGender] = useState("female");
  const [city, setCity] = useState("noida");

  return (
    <div>
      <h1>Create Task</h1>
      <form>
        <input
          type="text"
          placeholder="Enter task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br /> <br />
        <input
          type="checkbox"
          onChange={(e) => setCompleted(e.target.checked)}
          checked={completed}
        />{" "}
        Completed
        <br /> <br />
        <input
          type="radio"
          value="male"
          onChange={(e) => setGender(e.target.value)}
          checked={gender == "male" && true}
        />{" "}
        male
        <input
          type="radio"
          value="female"
          onChange={(e) => setGender(e.target.value)}
          checked={gender == "female"}
        />{" "}
        female
        <br />
        <br />
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="noida">Noida</option>
        </select>
        <br />
        <br />
        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default App;
