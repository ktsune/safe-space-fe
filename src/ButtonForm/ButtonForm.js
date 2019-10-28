import React from 'react'
import './ButtonForm.css'

const ButtonForm = ({personData, setPersonData}) => {

  console.log(personData)

  return (
    <form className="ButtonForm">
      <div id="addToGroup-container">
        <h1 id="addToGroup-text">Add to Group</h1>
        <button id='add-dependent'>+</button>
      </div>
        <button id='submit' onClick={console.log("PD", personData)}>Submit</button>
    </form>
  )
}

export default ButtonForm;