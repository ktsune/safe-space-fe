import React from "react";
import Map from "../Map/Map";
import { NavLink } from "react-router-dom";
import "./LogInForm.css";

const LogInForm = ({ reliefCenter, selectCenter, isCenterSelected }) => {
  return (
    <section className="LogInForm">
      {!isCenterSelected ? (
        <article className="pick-relief-center-menu">
          <Map selectCenter={selectCenter} />
        </article>
      ) : (
        <article className="navigation-menu">
          <NavLink to="/supplies" className="Link" id="supplies-button-link">
            <button id="supplies-button">Supplies</button>
          </NavLink>
          <NavLink to="/check-in" className="Link" id="check-in-button-link">
            <button id="check-in-button">Check In</button>
          </NavLink>
          <NavLink to="/check-out" className="Link" id="check-out-button-link">
            <button id="check-out-button">Check Out</button>
          </NavLink>
        </article>
      )}
    </section>
  );
};

export default LogInForm;
