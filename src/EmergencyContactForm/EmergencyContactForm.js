import React from 'react'
// import React, { useState } from 'react';
import './EmergencyContactForm.css'

class EmergencyContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      phone: '', 
      relationship: ''
    }; 
    this.formUpdate = this.formUpdate.bind(this);
  }

  formUpdate = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
  return (
    <form className="EmergencyContactForm">
      <h1>Emergency Contact</h1>

      <div id='field'> 
       <label for="Full Name">Name:</label>
       <input id="fullname" type="text" name='name' placeholder="Add Full Name" onChange={this.formUpdate}/>
      </div>

      <div id='field'> 
        <label for="phone">Phone:</label>
        <input id="phone" type='text' name='phone' placeholder="Add Phone Number" onChange={this.formUpdate}/>
      </div>

      <div id='field'> 
       <label for="relationship">Relationship:</label>
       <input id="relationship" type='text' name='relationship' placeholder="Add relationship" onChange={this.formUpdate}/> 
      </div>
    </form>
  )
}}

export default EmergencyContactForm;