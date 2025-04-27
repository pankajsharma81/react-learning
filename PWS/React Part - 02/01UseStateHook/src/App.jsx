// import Counter from "./Counter"
// import Conditional from "./Conditional"

import Props from "./props";

function App() {
  // const obj = {
  //   src: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
  //   height: "200px",
  //   width: "200px",
  // };

  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <>
      {/* <Counter/> */}
      {/* <Conditional/> */}
      {/* <Props {... obj} />
      <Props
        src="https://images.unsplash.com/photo-1625316708582-7c38734be31d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D"
        height="200px"
        width="200px"
      />  Hello.......... <Props/> */}

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
