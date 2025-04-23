import React from "react";

const DogCard = ({ name, image }) => {
  return (
    <>
      <h1>{name}</h1>
      <img src={image} />
    </>
  );
};

export default DogCard;
