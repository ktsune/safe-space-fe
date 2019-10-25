import React, { useState, useContext } from 'react';
import { UsersContext } from '../Contexts/UsersContext';
import '../CheckOutForm/CheckOutForm.css';


const CheckOutForm = () => {
  const { currentUsers, setCurrentUsers } = useContext(UsersContext)
  const [search, updateSearch] = useState('');  
  
  let namesArray = !search ? currentUsers.original : currentUsers.result 
  let namesList = namesArray.map((name, index) => {
    return <div className="CheckOutForm_visitor" key={index}>
      <p>{name.name}</p>
      <button>X</button>
    </div>
  })
  
  const handleSearch = (e) => {
    updateSearch(e.target.value)
    if(!e.target.value) {
      setCurrentUsers({ original: currentUsers.original, result: currentUsers.original })
    } else {
    let filteredNames = currentUsers.result.filter(({name}) => name.toLowerCase().includes(e.target.value.toLowerCase()))
      setCurrentUsers({ ...currentUsers, result: filteredNames })
    }
  }

  return (
    <section className="CheckOutForm">
      <input 
        type="text"
        placeholder="Search the database..."
        name="search"
        value={search}
        onChange={handleSearch}
        autoComplete="off"
      />
      <div className="CheckOutForm_visitor-container">
        {namesList}
      </div>
    </section>
  )
}

export default CheckOutForm
