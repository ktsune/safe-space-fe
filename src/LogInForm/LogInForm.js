import React from 'react'
// import CheckInForm from '../CheckInForm/CheckInForm'

const LogInForm = ({reliefCenterID, reliefCenter}) => {
  let reliefCenterMenu = () => {
    return (
      <article className="pick-relief-center-menu">
      < input id="dropdown-menu" placeholder="Find Relief Center..."/>
        <button id="loginForm-submit-button">Submit</button>
      </article>
    )
  }

  let navigationMenu = () => {
    return (
      <article className="navigation-menu">
        <button id="supplies-button">Supplies</button>
        <button id="check-in-button" >Check In</button>
        <button id="check-out-button">Check Out</button>
      </article>
    )
  }

  return (
    <section className="LogInForm">
    {reliefCenterID ? reliefCenterMenu() : navigationMenu()}
    {/* {<CheckInForm /> } */}
    </section>
  )
}

export default LogInForm


