import React, { useState } from "react";
import "./Item.css";

const Item = ({ key, id, item }) => {
  const [isNeeded, setIsNeeded] = useState(false);
  return (
    <article className="Item">
      <img
        id="check-or-uncheck"
        alt=""
        src={
          !isNeeded
            ? require("../assets/unchecked.svg")
            : require("../assets/checked.svg")
        }/>
      <h3 id="item-name">{item}</h3>
    </article>
  );
};

export default Item;
