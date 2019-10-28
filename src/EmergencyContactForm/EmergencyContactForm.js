import React, { useState } from 'react'
import './EmergencyContactForm.css'

const EmergencyContactForm = ({emergencyName, setEmergencyName, emergencyPhone, setEmergencyPhone, emergencyRelationship, setEmergencyRelationship}) => {

  return (
    <form className="EmergencyContactForm">
      <h1 id="emergency-contact-info-header">Emergency Contact Information:</h1>

      <div id='field'> 
       <label id="fullname-label" for="Full Name">Full Name:</label>
       <input id="fullname" type="text" name='name' value={emergencyName} placeholder="Add Full Name" onChange={e => setEmergencyName(e.target.value)}/>
      </div>

      <div id='field'> 
        <label id="phone-label" for="phone">Phone:</label>
        <input id="phone" type='text' name='phone' value={emergencyPhone} placeholder="Add Phone Number" onChange={e => setEmergencyPhone(e.target.value)}/>
      </div>

      <div id='field'> 
       <label id="relationship-label" for="relationship">Relationship:</label>
       <input id="relationship" type='text' name='relationship' value={emergencyRelationship} placeholder="Add relationship" onChange={e => setEmergencyRelationship(e.target.value)}/> 
      </div>
    </form>
  )
}

export default EmergencyContactForm;

