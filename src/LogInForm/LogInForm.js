import React from 'react';
import Map from '../Map/Map'
import  { NavLink } from 'react-router-dom';
import './LogInForm.css'

const LogInForm = ({ reliefCenter, selectCenter, isCenterSelected }) => {

  return (
    <section className="LogInForm">
    {!isCenterSelected ? 
      <article className="pick-relief-center-menu">
        <Map />
        <input id="dropdown-menu" placeholder="Find Relief Center..."/>
        <button onClick={() => selectCenter(true)}id="loginForm-submit-button">Submit</button>
      </article> 
    : 
    <article className="navigation-menu">
      <NavLink to="/supplies" className="Link" id="supplies-button">
        <button id="supplies-button">Supplies</button>
      </NavLink>
      <NavLink to="/check-in" className="Link" id="check-in-button">
        <button id="check-in-button">Check In</button>
      </NavLink>
      <NavLink to="/check-out" className="Link" id="check-out-button">
        <button id="check-out-button">Check Out</button>
      </NavLink>
    </article>
    }
    </section>
  )
}

export default LogInForm




