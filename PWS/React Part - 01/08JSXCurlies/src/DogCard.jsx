import React from "react";

const DogCard = ({ name, image }) => {
  return (
    <>
      <h1 style={{fontSize:"10px",color:"blue"}}>{name}</h1>
      <img src={image} />
    </>
  );
};

export default DogCard;
