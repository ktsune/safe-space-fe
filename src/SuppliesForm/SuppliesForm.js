import React, { useContext, useState } from 'react';
import { CurrentCenterContext } from '../Contexts/CurrentCenterContext';
import { ItemsContext } from '../Contexts/ItemsContext';
import './SuppliesForm.css';



const SuppliesForm = () => {
  const { reliefCenter, setreliefCenter } = useContext(CurrentCenterContext);
  const { currentItems, setCurrentItems } = useContext(ItemsContext);
  const [idsToEdit, setIdsToEdit] = useState([]);

  const updateQuantity = (id, type) => {
    let updatedItems = currentItems.map(item => {
      if(item.id == id) {
        let updatedQuantity = type === 'decrement' ? item.quantity = item.quantity - 1 : item.quantity = item.quantity + 1
        return {
          id: item.id,
          name: item.name,
          quantity: updatedQuantity,
          __typename: "Item" 
        }
      } else {
        return item
      }
    })
    setCurrentItems(updatedItems);
    let editedItems = [...idsToEdit, id];
    setIdsToEdit([...new Set(editedItems)]);
  }

  const hasBeenEdited = (id) => {
    return idsToEdit.find(itemId => itemId === id);
  }

  const saveChanges = (item) => {
    let filteredIds = idsToEdit.filter(id => id !== item.id);
    setIdsToEdit(filteredIds)
    console.log(item)
  }

  const itemsList = currentItems.map((item, index) => {
    return <section key={index} className="itemsList_section">
      <p>{item.name}</p>
      <div>
        <button disabled={item.quantity === 0} onClick={() => updateQuantity(item.id, 'decrement')}>-</button>
          <p>{item.quantity}</p>
        <button onClick={() => updateQuantity(item.id, 'increment')}>+</button>
      </div>
      { hasBeenEdited(item.id) && <button onClick={() => saveChanges(item)}>Save Changes</button> }
    </section>
  })

  console.log(idsToEdit)
  return (
    <section>
      <h1>Heyo!</h1>
      <h3>Inventory for {reliefCenter.name}</h3>
      <article>
        {itemsList}
        <button>Save Changes</button>
      </article>
    </section>
  )
}

export default SuppliesForm
