import React, { useState, useContext } from "react";
import BasicInfoForm from "../BasicInfoForm/BasicInfoForm";
import NeedsForm from "../NeedsForm/NeedsForm";
import EmergencyContactForm from "../EmergencyContactForm/EmergencyContactForm";
import { postNewUser, postNeeds, postEmergencyContacts } from "../apiCalls/apiCalls";
import { UsersContext } from '../Contexts/UsersContext';
import { NavLink } from "react-router-dom";
import "./CheckInForm.css";

const CheckInForm = ({ reliefCenter }) => {
  const { currentUsers, setCurrentUsers } = useContext(UsersContext)
  const [isUserSubmitted, setSubmittedStatus] = useState(false)
  const [personName, setPersonName] = useState("");
  const [personAge, setPersonAge] = useState("");
  const [personPhone, setPersonPhone] = useState("");
  const [neededItems, setNeededItems] = useState([]);
  const [items, setItems] = useState([
    "Diapers",
    "Baby Wipes",
    "Breastfeeding Supplies",
    "Infant Formula",
    "Feminine Products",
    "Phone Charger (iphone)",
    "Phone Charger (android)",
    "add item"
  ]);

  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [emergencyRelationship, setEmergencyRelationship] = useState("");
  const [sendMessage, setSendMessage] = useState(false);

  const submitUser = async e => {
    e.preventDefault();
    const personData = {
      name: personName,
      age: personAge,
      phone: personPhone,
      needs: items,
      emergencyName: emergencyName,
      emergencyPhone: emergencyPhone,
      emergencyRelationship: emergencyRelationship,
      notify: sendMessage
    };
    let userId = await postNewUser(personData, reliefCenter);
    let newUser = { id: userId, name: personName, __typename: "User" }
    setCurrentUsers({ 
      result: [...currentUsers.result, newUser], 
      original: [...currentUsers.result, newUser] 
    })
    await postNeeds(userId, neededItems)
    await postEmergencyContacts(userId, personData)
    setSubmittedStatus(true)
  };

  return (
    !isUserSubmitted ?
    <section className="CheckInForm">
      <BasicInfoForm
        personName={personName}
        setPersonName={setPersonName}
        personAge={personAge}
        setPersonAge={setPersonAge}
        personPhone={personPhone}
        setPersonPhone={setPersonPhone}
      />
      <NeedsForm
        items={items}
        setItems={setItems}
        neededItems={neededItems}
        setNeededItems={setNeededItems}
      />
      <EmergencyContactForm
        emergencyName={emergencyName}
        setEmergencyName={setEmergencyName}
        emergencyPhone={emergencyPhone}
        setEmergencyPhone={setEmergencyPhone}
        emergencyRelationship={emergencyRelationship}
        setEmergencyRelationship={setEmergencyRelationship}
        sendMessage={sendMessage}
        setSendMessage={setSendMessage}
      />
      <hr />
      <div id="submit-form-button-container">
        <h3 id="submit-form-text">
          By clicking the "Submit Form" button below, I certify that all
          information in this form is true and correct to the best of my
          knowledge.
        </h3>
        <button id="submit-form-button" onClick={submitUser}>
          Submit Form
        </button>
      </div>
    </section>
    :
    <section className="CheckInForm-successful-checkin">
      <p>You successfully checked in!</p>
      <button className="button_successful-checkin"onClick={() => setSubmittedStatus(false)}>Go to Check-In</button>
      <NavLink to="/">
        <button className="button_successful-checkin">Go to Main Menu</button>
      </NavLink>
    </section>
  );
};

export default CheckInForm;
