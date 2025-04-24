// import Person from './Person'
// import Button from "./Button";
// import Header from "./Header";
// import List from "./List";

import "./App.css";

function App() {
  return (
    <>
      {/* <Person name="Pankaj" age="21" /> */}
      {/* <Button text="Submit" onClick={() => {console.log("Button Clicked!!")}}/*/}
      {/* <Header title="React JS"/> */}
      <List items={["apple", "mongo", "orange"]} />
    </>
  );
}

export default App;
