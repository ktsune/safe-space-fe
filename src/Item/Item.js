import React, { useState } from "react";
import "./Item.css";

const Item = ({ item, items, setItems, neededItems, setNeededItems }) => {
  const [newItem, setNewItem] = useState("");

  const handleChange = e => setNewItem(e.target.value);

  const handleSubmit = (e, newItem) => {
    e.preventDefault();
    items.splice(items.length - 1, 0, newItem);
    setItems([...items]);
    setNeededItems([...neededItems, newItem]);
  };

  const handleCheck = e => {
    if (!neededItems.includes(item)) {
      setNeededItems([...neededItems, item]);
    } else {
      let filteredItems = neededItems.filter(itemName => itemName !== item);
      setNeededItems(filteredItems);
    }
  };

  return (
    <article className="Item">
      {item === "add item" ? (
        <div id="add-item-container">
          <input
            id="new-item"
            type="text"
            placeholder="Add Item/Medication"
            name="name"
            value={newItem}
            onChange={handleChange}
            autoComplete="off"
          />
          <button disabled={!newItem} id="submit-new-item" type="submit" onClick={e => handleSubmit(e, newItem)}>
            <img
              id="plus-img"
              alt="plus symbol"
              src={require("../assets/plus-sign.svg")}
            />
          </button>
        </div>
      ) : (
        <div id="checkbox-item-container">
          <img
            id="check-or-uncheck"
            alt=""
            src={
              !neededItems.includes(item)
                ? require("../assets/unchecked.svg")
                : require("../assets/checked.svg")
            }
            onClick={handleCheck}
          />
          <h3 id="item-name" onClick={handleCheck}>
            {item}
          </h3>
        </div>
      )}
    </article>
  );
};

export default Item;
