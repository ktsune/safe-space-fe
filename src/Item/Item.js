import React, { useState } from "react";
import "./Item.css";

const Item = ({ items, item, setItems }) => {
  const [isNeeded, setIsNeeded] = useState(false);
  const [newItem, setNewItem] = useState("")

  const handleChange = e => setNewItem(e.target.value);
  const handleSubmit = (e, newItem) => {
    e.preventDefault();
    console.log("things")
    setItems([...items, newItem])
  }

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
        {item === "add item" ?
        <div id="add-item-container"> 
        <input 
        id="new-item" 
        type="text" 
        placeholder="Add Item" 
        name="name" 
        value={newItem} 
        onChange={handleChange} 
        />
        <button type="submit" onClick={e => handleSubmit(e, newItem)}>+++</button>
        </div> 
        : 
        <h3 id="item-name" onClick={e => setIsNeeded(!isNeeded)}>{item}</h3>
        }
      </div>
    </article>
  );
};

export default Item;
