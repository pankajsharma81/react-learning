import React from "react";

const Props = ({ src, height, width, children }) => {
  return (
    <>
      <img src={src} height={height} width={width} />
      {children}
    </>
  );
};

export default Props;
