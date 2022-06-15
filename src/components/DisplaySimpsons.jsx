// src/components/DisplaySimpsons.jsx
import React from "react";

function DisplaySimpsons({ simpsons }) {
  return (
    simpsons&& (
      <div className="DisplaySimpsons">
        <img src={simpsons.image} />
        <ul>
          <li>quote: {simpsons.quote}</li>
          <li>character: {simpsons.character}</li>
          <li>characterDirection: {simpsons.characterDirection}</li>
        </ul>
      </div>
    )
  );
}

export default DisplaySimpsons;

