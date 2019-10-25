import React from 'react'
import './BasicInfoForm.css'

const BasicInfoForm = () => {
  return (
    <form className="BasicInfoForm">
      <div id="fullname-container">
        <label id="fullname-label" for="fullname">Full Name:</label>
        <input id="fullname" type="text" placeholder="Add Full Name"/>
      </div>
      <div id="age-container">
        <label id="age-label" for="age">Age:</label>
        <input id="age" type='text' placeholder="Add Age"/>
      </div>
      <div id="phone-container">
        <label id="phone-label" for="phone">Phone Number:</label>
        <input id="phone" type='text' placeholder="Add Phone Number"/>
      </div>
    </form>
  )
}

export default BasicInfoForm;
