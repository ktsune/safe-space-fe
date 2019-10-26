import React, { useState } from "react";
import "./Item.css";

const Item = ({ key, id, item }) => {
  const [isNeeded, setIsNeeded] = useState(false);
  const [addText, setAddText] = useState();

  console.log(item);
  return (
    <article className="Item">
      <img
        id="check-or-uncheck"
        alt=""
        src={
          !isNeeded
            ? require("../assets/unchecked.svg")
            : require("../assets/checked.svg")
        }
        onClick={e => setIsNeeded(!isNeeded)}
      />
      <h3 id="item-name" onClick={e => setIsNeeded(!isNeeded)}>
        {item}
      </h3>
      { item === 'dietary restrictions' && <input type="text" placeholder="Add item here" />}
      { item === 'medications' && <input type="text" placeholder="Add item here" />}
      { item === 'allergies' && <input type="text" placeholder="Add item here" />}
      { item === 'other' && <input type="text" placeholder="Add item here" />}

      {/* {item === "medications" || "allergies" || "other" && ( */}
      {/* <input type="text" placeholder="Add item here" /> */}
      {/* )} */}
    </article>
  );
};

export default Item;
