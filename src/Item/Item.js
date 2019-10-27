import React, { useState } from "react";
import "./Item.css";

const Item = ({ key, id, item }) => {
  const [isNeeded, setIsNeeded] = useState(false);
  const [addText, setAddText] = useState();

  console.log(item);
  return (
    <article className="Item">
      <div id="checkbox-item-container">
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
      </div>
      {/* { item === 'dietary restrictions' && <input id="dietary-item" type="text" placeholder="Add item here" />} */}
      { item === 'medications' && <input id="medications-item" type="text" placeholder="Add item here" />}
      {/* { item === 'allergies' && <input id="allergies-item" type="text" placeholder="Add item here" />} */}
      { item === 'other' && <input id="other-item" type="text" placeholder="Add item here" />}

    </article>
  );
};

export default Item;
