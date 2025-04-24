//4. Create a component named "List" that takes one prop - "items". The component should display an unordered list element with the given list items.

import React from "react";

const List = ({ props }) => {
  return (
    <>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
