import React from 'react'
import './EmergencyContactForm.css'

const EmergencyContactForm = ({emergencyName, setEmergencyName, emergencyPhone, setEmergencyPhone, emergencyRelationship, setEmergencyRelationship, sendMessage, setSendMessage}) => {

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

      <button onClick={setSendMessage(!sendMessage)}>Click Me to Allow Text to Contact</button>

    </form>
  )
}

export default EmergencyContactForm;

