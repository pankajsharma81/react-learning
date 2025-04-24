// 1. Create a component named "Person" that takes two props - "name" and "age". The component should display the person's name and age in a paragraph element.

import React from "react";

const Person = ({ name, age }) => {
  return (
    <h1>
      My name is {name} and {age} years old
    </h1>
  );
};

export default Person;
