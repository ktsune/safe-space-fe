import React, { Component } from 'react'
import Map from '../Map/Map'
import './LogInForm.css'

class LogInForm extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }
  //Add map function to apply relief centers to dropdown menu
  //Add function to set reliefCenterID state when clicked and toggle isLoggedIn to true

  selectPin = () => {
    console.log('test')
  }

  render() {
    return (
      <section className="LogInForm">
        {!this.state.isLoggedIn ?
        <article className="pick-relief-center-menu">
          <Map selectPin={this.selectPin}/>
          <input id="dropdown-menu" placeholder="Find Relief Center..."/>
          <button id="loginForm-submit-button">Submit</button>
        </article>
        :
        <article className="navigation-menu">
          <button id="supplies-button">Supplies</button>
          <button id="check-in-button">Check In</button>
          <button id="check-out-button">Check Out</button>
        </article>
        }
      </section>
    )
  }
}

export default LogInForm;

