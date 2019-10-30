import React, { useContext, useState } from 'react';
import { patchItem, addItem } from '../apiCalls/apiCalls';
import { CurrentCenterContext } from '../Contexts/CurrentCenterContext';
import { ItemsContext } from '../Contexts/ItemsContext';
import PropTypes from 'prop-types';
import './SuppliesForm.css';

const SuppliesForm = () => {
  const { reliefCenter, setreliefCenter } = useContext(CurrentCenterContext);
  const { currentItems, setCurrentItems } = useContext(ItemsContext);
  const [idsToEdit, setIdsToEdit] = useState([]);
  const [quantityInput, setQuantityInput] = useState("");
  const [itemToAdd, setItemToAdd] = useState('');  
  const [errorMsg, setErrorMsg] = useState("");
  const [isConsumable, setConsumable] = useState(false);
  
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

  const updateQuantityOnInput = (id) => {
    let updatedItems = currentItems.map(item => {
      if (item.id == id) {
        return {
          id: item.id,
          name: item.name,
          quantity: quantityInput,
          __typename: "Item"
        }
      } else {
        return item
      }
    })
    setCurrentItems(updatedItems);
  }
  
  const hasBeenEdited = (id) => {
    return idsToEdit.find(itemId => itemId === id);
  }
  
  const saveChanges = async (item) => {
    let filteredIds = idsToEdit.filter(id => id !== item.id);
    setIdsToEdit(filteredIds)
    if (quantityInput) {
      let itemObj = { ...item, quantity: quantityInput }
      try {
        await patchItem(itemObj, reliefCenter);
        updateQuantityOnInput(item.id)
      } catch (error) {
        setErrorMsg('There was an error saving your changes.')
      }
    } else {
      try {
        await patchItem(item, reliefCenter);
      } catch(error) {
        setErrorMsg('There was an error saving your changes.')
      }
    }
  } 

  const handleQuantityInput = (e, item) => {
    setQuantityInput(e.target.value)
    let editedItems = [...idsToEdit, item.id];
    setIdsToEdit([...new Set(editedItems)]);
    if(!e.target.value) {
      let filteredIds = idsToEdit.filter(id => id !== item.id);
      setIdsToEdit(filteredIds)
    }
  }

  const handleAddItem = (e) => {
    setItemToAdd(e.target.value)
  }

  const submitNewItem = async (e) => {
    e.preventDefault();
    let newItem = {
      name: itemToAdd, 
      quantity: 0, 
      consumable: isConsumable 
    }
    let response  = await addItem(newItem, reliefCenter.id)
    let itemWithId = { ...newItem, id: response}
    setCurrentItems([...currentItems, itemWithId])
    setItemToAdd("")
    setConsumable(false)
  }

  const handleConsumable = () => {
    setConsumable(!isConsumable)
  }
        
  const itemsList = currentItems.map((item, index) => {
    return <section key={index} className="itemsList_section">
      <p>{item.name}</p>
      <div className="itemsList_quantity-container">
        <div className="quantity-text">
          <button disabled={item.quantity === 0} onClick={() => updateQuantity(item.id, 'decrement')}>-</button>
          <p>{item.quantity}</p>
          <button onClick={() => updateQuantity(item.id, 'increment')}>+</button>
        </div>
        <div>
          <input 
            className="quantity_input"
            type="number"
            name="quantityInput"
            placeholder="Enter a value..."
            onChange={(e) => handleQuantityInput(e, item)} />
        </div>
      </div>  
      { hasBeenEdited(item.id) && <button className="itemsList_save-changes" onClick={() => saveChanges(item)}>Save Changes</button> }
    </section>
  })
  
  return (
    <section className="SuppliesForm_section">
      <h2>Inventory for {reliefCenter.name}</h2>
      { errorMsg && <p>There was an error saving your changes, please try again.</p> }
      <article>
        {itemsList}
      </article>
      <form className="SuppliesForm-add-item">
        <label>Add an item:
          <input 
            type="text"
            name="addItem"
            placeholder="Enter item name..."
            value={itemToAdd}
            onChange={handleAddItem}
            autoComplete="off" />
        </label>
        <label>Is the item consumable:
          <img
            className="consumable-check"
            alt="add new item"
            src={
              !isConsumable
                ? require("../assets/unchecked.svg")
                : require("../assets/checked.svg")
            }
            onClick={handleConsumable}
          />
        </label>
        <button disabled={!itemToAdd} onClick={submitNewItem}>Add Item</button>
      </form>
    </section>
  )
}

export default SuppliesForm

SuppliesForm.contextTypes = {
  reliefCenter: PropTypes.object,
  setreliefCenter: PropTypes.func,
  currentItems: PropTypes.arrayOf(PropTypes.object),
  setCurrentItems: PropTypes.func
};
