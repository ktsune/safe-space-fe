import React, { useState } from "react";
import "./Item.css";

const Item = ({ item, items, setItems, medication, removeMed}) => {
  const [isNeeded, setIsNeeded] = useState(false);
  const [newItem, setNewItem] = useState("")

  const handleChange = e => setNewItem(e.target.value);

  const handleSubmit = (e, newItem) => {
    e.preventDefault();
    items.splice(items.length - 1, 0, newItem)
    setIsNeeded(true)
    setItems([...items])
  }

  return (
    <article className="Item">
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
      : medication ?
        <div id="medical-item-container">
          <h3 id="medication-name">{medication}</h3>
          <button id="remove-medication-button" onClick={e => removeMed(e, medication.id)}>X</button>
        </div>
      :
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
          <h3 id="item-name" onClick={e => setIsNeeded(!isNeeded)}>{item}</h3>
        </div>
      }
    </article>
  );
};

export default Item;
