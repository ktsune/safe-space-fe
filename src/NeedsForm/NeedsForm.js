import React, { useState } from "react";
import Item from '../Item/Item'
import "./NeedsForm.css";

const NeedsForm = () => {
    const [items, setItems] = useState([
    "diapers", "baby wipes", "breastfeeding supplies", "infant formula",
    "feminine products", "phone charger (iphone)", "phone charger (android)",
    "medications", "allergies", "dietary restrictions", "other"
    ]);

    const allItems = items.map((item, index) => {
        return (<Item
        key={index + 1}
        id={index + 1}
        item={item}
        />
      )
  })

  return (
    <section className="NeedsForm">
      <h1 id="necessities-header">Necessities:</h1>
        <article id="items-container">
            {allItems}
        </article>
    </section>
  );
};

export default NeedsForm;
