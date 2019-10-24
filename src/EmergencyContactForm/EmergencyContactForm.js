import React from 'react'
import './EmergencyContactForm.css'

const EmergencyContactForm = () => {
  return (
    <form className="EmergencyContactForm">
      <h1>Emergency Contact</h1>

       <label for="Full Name">Name:</label>
       <input id="fullname" type="text" placeholder="Add Full Name"/>

       <label for="phone">Phone:</label>
       <input id="phone" type='text' placeholder="Add Phone Number"/>

       <label for="relationship">Relationship:</label>
       <input id="relationship" type='text' placeholder="Add relationship"/> 
    </form>
  )
}

export default EmergencyContactForm;