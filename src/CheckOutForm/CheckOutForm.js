import React, { useState, useContext } from 'react';
import { UsersContext } from '../Contexts/UsersContext';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import '../CheckOutForm/CheckOutForm.css';

const CheckOutForm = () => {
  const { currentUsers, setCurrentUsers } = useContext(UsersContext)
  const [search, updateSearch] = useState('');  

  const deleteUserFromDB = async (id) => {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    let queryParams = `mutation {deleteUser(id: ${id}) {user {name}}}`

    let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`

    try {
      let resp = await fetch(url, options);

      if (!resp.ok) {
        throw new Error('There was an error deleting the user')
      }

      let data = await resp.json();
      return data

    } catch (error) {
      throw error
    }
  }  

  const deleteUser = async (id) => {
    await deleteUserFromDB(id)
    let filteredUsers = currentUsers.original.filter(person => person.id != 3)
    setCurrentUsers({ result: filteredUsers, original: filteredUsers })
  }

  let namesArray = !search ? currentUsers.original : currentUsers.result 
  let namesList = namesArray.map((name, index) => {
    return <div className="CheckOutForm_visitor button push" id="push" key={index}>
      <p>Check {name.name} Out </p>
      <button onClick={() => deleteUser(name.id)} id='delete-visitor'>X</button>
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
        className="CheckOutForm_input"
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
