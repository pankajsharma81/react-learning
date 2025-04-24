// 2. Create a component named "Button" that takes two props - "text" and "onClick". The component should display a button element with the given text and call the onClick function when clicked.

import React from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
};

export default Button;
