import React from "react";

function Card({name,image,ability}) {
  return (
    <div className=" bg-gray-200 p-4  ">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
      />
      <p>{ability}</p>
    </div>
  );
}

export default Card;
