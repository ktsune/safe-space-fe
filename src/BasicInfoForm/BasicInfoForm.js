import React from 'react'
import './BasicInfoForm.css'

const BasicInfoForm = ({personName, setPersonName, personAge, setPersonAge, personPhone, setPersonPhone}) => {

  return (
    <form className="BasicInfoForm">
      <h1 id="basic-info-header">Basic Information:</h1>
      <div id="fullname-container">
        <label id="fullname-label" for="fullname">Full Name:</label>
        <input id="fullname" type="text" placeholder="Add Full Name" onChange={e => setPersonName(e.target.value)} name="name" value={personName}/>
      </div>
      <div id="age-container">
        <label id="age-label" for="age">Age:</label>
        <input id="age" type='text' placeholder="Add Age" onChange={e => setPersonAge(e.target.value)} name="age" value={personAge}/>
      </div>
      <div id="phone-container">
        <label id="phone-label" for="phone">Phone Number:</label>
        <input id="phone" type='text' placeholder="Add Phone Number" onChange={e => setPersonPhone(e.target.value)} name="phone" value={personPhone}/>
      </div>
    </form>
  )
}

export default BasicInfoForm;
