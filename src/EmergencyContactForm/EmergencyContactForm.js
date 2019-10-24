import React from 'react'
import './EmergencyContactForm.css'

const EmergencyContactForm = () => {
  return (
    <form className="EmergencyContactForm">
      <h1>Emergency Contact</h1>

      <div id='field'> 
       <label for="Full Name">Name:</label>
       <input id="fullname" type="text" placeholder="Add Full Name"/>
      </div>

      <div id='field'> 
        <label for="phone">Phone:</label>
        <input id="phone" type='text' placeholder="Add Phone Number"/>
      </div>

      <div id='field'> 
       <label for="relationship">Relationship:</label>
       <input id="relationship" type='text' placeholder="Add relationship"/> 
      </div>
    </form>
  )
}

export default EmergencyContactForm;