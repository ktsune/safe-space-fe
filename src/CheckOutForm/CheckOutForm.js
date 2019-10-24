import React, { useState } from 'react'
import '../CheckOutForm/CheckOutForm.css'

const CheckOutForm = () => {
  let originalNamesArray = ['David', 'Chirs', 'Ann', 'Jacob'];
  const [search, updateSearch] = useState('');
  const [names, updateNames] = useState(['David', 'Chirs', 'Ann', 'Jacob'])

  let namesArray = !search ? originalNamesArray : names
  let namesList = namesArray.map((name, index) => {
    return <div className="CheckOutForm_visitor" key={index}>
      <p>{name}</p>
      <button>X</button>
    </div>
  })
  
  const handleSearch = (e) => {
    updateSearch(e.target.value)
    if(!e.target.value) {
      updateNames(originalNamesArray)
    } else {
    let filteredNames = names.filter(name => name.toLowerCase().includes(e.target.value.toLowerCase()))
    updateNames(filteredNames)
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
