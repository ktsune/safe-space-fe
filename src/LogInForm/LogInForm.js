import React, { useContext } from "react";
import Map from "../Map/Map";
import { NavLink } from "react-router-dom";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { ItemsContext } from '../Contexts/ItemsContext';
import "./LogInForm.css";

const LogInForm = ({ reliefCenter, selectCenter, isCenterSelected }) => {
  const { currentItems, setCurrentItems } = useContext(ItemsContext);

  console.log(reliefCenter.id)

  let GET_ITEMS = gql`
    query {
      itemsAtCenter(centerId: ${reliefCenter.id}) {
      id
      name
      quantity
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ITEMS);


  const fetchItems = () => {
    setCurrentItems(data.itemsAtCenter)
  }

  return (
    <section className="LogInForm">
    {!isCenterSelected ? 
      <article className="pick-relief-center-menu">
        <Map selectCenter={selectCenter}/>
      </article> 
    : 
    <article className="navigation-menu">
          <button className="LogInForm_button-back" onClick={() => selectCenter(false)}>Back to Home</button>
      <NavLink to="/supplies" className="Link" id="supplies-button" onClick={fetchItems}>
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
  );
};

export default LogInForm;
