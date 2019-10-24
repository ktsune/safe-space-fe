import React from 'react'
import './ButtonForm.css'

const ButtonForm = () => {
  return (
    <form className="ButtonForm">
      <div id="addToGroup-container">
        <h1 id="addToGroup-text">Add to Group</h1>
        <button id='add-dependent'>+</button>
      </div>
        <button id='submit'>Submit</button>
    </form>
  )
}

export default ButtonForm;