import React, { useState } from 'react'
import './EmergencyContactForm.css'

const EmergencyContactForm = ({emergencyInfo, setEmergencyInfo}) => {

  const handleChange = (e) => setEmergencyInfo({[e.target.name]: [e.target.value]});

  return (
    <form className="EmergencyContactForm">
      <h1 id="emergency-contact-info-header">Emergency Contact Information:</h1>

      <div id='field'> 
       <label id="fullname-label" for="Full Name">Name:</label>
       <input id="fullname" type="text" name='name' value={emergencyInfo.name} placeholder="Add Full Name" onChange={handleChange}/>
      </div>

      <div id='field'> 
        <label id="phone-label" for="phone">Phone:</label>
        <input id="phone" type='text' name='phone' value={emergencyInfo.phone} placeholder="Add Phone Number" onChange={handleChange}/>
      </div>

      <div id='field'> 
       <label id="relationship-label" for="relationship">Relationship:</label>
       <input id="relationship" type='text' name='relationship' value={emergencyInfo.relationship} placeholder="Add relationship" onChange={handleChange}/> 
      </div>
    </form>
  )
}

export default EmergencyContactForm;

