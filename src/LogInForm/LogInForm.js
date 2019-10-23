import React, { Component } from 'react'
import './LogInForm.css'
import CheckInForm from '../CheckInForm/CheckInForm';

class LogInForm extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true, 
      hasBeenClicked: true
    }
  }
  //Add map function to apply relief centers to dropdown menu
  //Add function to set reliefCenterID state when clicked and toggle isLoggedIn to true

  toggleForm = () => {
    this.setState({ hasBeenClicked: !this.state.hasBeenClicked })
  }

  render() {
    return (
      <section className="LogInForm">
        {!this.state.isLoggedIn ?
        <article className="pick-relief-center-menu">
          <input id="dropdown-menu" placeholder="Find Relief Center..."/>
          <button id="loginForm-submit-button">Submit</button>
        </article>
        :
        <article className="navigation-menu">
          <button id="supplies-button">Supplies</button>
          <button id="check-in-button" onClick={this.toggleForm} >Check In</button>
          <button id="check-out-button">Check Out</button>
        </article>
        }
        {
          this.state.hasBeenClicked 
          && 
          <CheckInForm /> 
        }
      </section>
    )
  }
}

export default LogInForm;

