// import Person from './Person'
import Button from "./Button";
import "./App.css";

function App() {
  return (
    <>
      {/* <Person name="Pankaj" age="21" /> */}
      <Button text="Submit" onClick={() => {console.log("Button Clicked!!")}}/>
    </>
  );
}

export default App;
