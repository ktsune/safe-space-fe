import React, { useState } from "react";
import BasicInfoForm from "../BasicInfoForm/BasicInfoForm";
import NeedsForm from "../NeedsForm/NeedsForm";
import EmergencyContactForm from "../EmergencyContactForm/EmergencyContactForm";
import {
  postNewUser,
  postNeeds,
  postEmergencyContacts
} from "../apiCalls/apiCalls";
import "./CheckInForm.css";

const CheckInForm = ({ reliefCenter }) => {
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

    await postNeeds(userId, neededItems);
    await postEmergencyContacts(userId, personData);
  };

  return (
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
  );
};

export default CheckInForm;
