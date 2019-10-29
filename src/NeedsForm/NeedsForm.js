import React from "react";
import Item from "../Item/Item";
import "./NeedsForm.css";

const NeedsForm = ({ items, setItems, neededItems, setNeededItems }) => {
  const allItems = items.map((item, index) => {
    return <Item key={index} items={items} setItems={setItems} item={item} neededItems={neededItems} setNeededItems={setNeededItems} />;
  });

  return (
    <section className="NeedsForm">
      <h1 id="necessities-header">Necessities:</h1>
      <article id="items-container">{allItems}</article>
    </section>
  );
};

export default NeedsForm;
