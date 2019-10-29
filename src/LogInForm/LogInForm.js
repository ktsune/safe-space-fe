import React, { useContext } from "react";
import Map from "../Map/Map";
import { NavLink } from "react-router-dom";
import { getItems } from "../apiCalls/apiCalls";
import { ItemsContext } from "../Contexts/ItemsContext";
import "./LogInForm.css";

const LogInForm = ({ reliefCenter, selectCenter, isCenterSelected }) => {
  const { currentItems, setCurrentItems } = useContext(ItemsContext);

  const fetchItems = async () => {
    let items = await getItems(reliefCenter);
    setCurrentItems(items);
  };

  return (
    <section className="LogInForm">
      {!isCenterSelected ? (
        <article className="pick-relief-center-menu">
          <h2 id="login-form-instructions">
            Please select the location of the relief center for which you are currently stationed.
          </h2>
          <Map selectCenter={selectCenter} />
        </article>
      ) : (
        <article className="navigation-menu">
          <button
            className="LogInForm_button-back"
            onClick={() => selectCenter(false)}
          >
            Back to Home
          </button>
          <NavLink
            to="/supplies"
            className="Link"
            id="supplies-button"
            onClick={fetchItems}
          >
            <button id="supplies-button">Supplies</button>
          </NavLink>
          <NavLink to="/check-in" className="Link" id="check-in-button">
            <button id="check-in-button">Check-In Displaced Person</button>
          </NavLink>
          <NavLink to="/check-out" className="Link" id="check-out-button">
            <button id="check-out-button">Check-Out Displaced Person</button>
          </NavLink>
        </article>
      )}
    </section>
  );
};

export default LogInForm;
