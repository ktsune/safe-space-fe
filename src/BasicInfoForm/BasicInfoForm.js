import React from 'react'
import './BasicInfoForm.css'

const BasicInfoForm = () => {
  return (
    <form className="BasicInfoForm">

        <label for="Full Name">First Name:</label>
        <input id="fullname" type="text" placeholder="Add Fullname"/>

        <label for="age">Age:</label>
        <input id="age" type='text' placeholder="Add Age"/>

        <label for="phone">Phone Number:</label>
        <input id="phone" type='text' placeholder="Add Phone Number"/>

    </form>
  )
}

export default BasicInfoForm;
