import React, { useState } from "react";
import Item from "../Item/Item";
import "./NeedsForm.css";

const NeedsForm = ({items, setItems}) => {
  const allItems = items.map((item, index) => {
    return <Item key={index + 1} id={index + 1} items={items} setItems={setItems} item={item}/>;
  });

  // const allMeds = medications.map((medication, index) => {
  //   return <Item key={index + 1} id={index + 1} medication={medication} setMedications={setMedications} />
  // })

  return (
    <section className="NeedsForm">
      <h1 id="necessities-header">Necessities:</h1>
      <article id="items-container">{allItems}</article>
    </section>
  );
};

export default NeedsForm;
