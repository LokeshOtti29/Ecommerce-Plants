import React from "react";

const Cards = ({ data, index }) => {
  return <div key={index}>{data}</div>;
};

export default Cards;
