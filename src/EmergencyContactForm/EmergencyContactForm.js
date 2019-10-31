import React from "react";
import "./EmergencyContactForm.css";

const EmergencyContactForm = ({
  emergencyName,
  setEmergencyName,
  emergencyPhone,
  setEmergencyPhone,
  emergencyRelationship,
  setEmergencyRelationship,
  sendMessage,
  setSendMessage
}) => {
  const toggleSendMessage = e => {
    e.preventDefault();
    setSendMessage(!sendMessage);
  };
  console.log(sendMessage);
  return (
    <form className="EmergencyContactForm">
      <h1 id="emergency-contact-info-header">Emergency Contact Information:</h1>
      <div id="field">
        <label id="fullname-label" htmlFor="Full Name">
          Full Name:
        </label>
        <input
          id="fullname"
          type="text"
          name="name"
          value={emergencyName}
          placeholder="Add Full Name"
          onChange={e => setEmergencyName(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div id="field">
        <label id="phone-label" htmlFor="phone">
          Phone:
        </label>
        <input
          id="phone"
          type="text"
          name="phone"
          value={emergencyPhone}
          placeholder="Add Phone Number"
          onChange={e => setEmergencyPhone(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div id="field">
        <label id="relationship-label" htmlFor="relationship">
          Relationship:
        </label>
        <input
          id="relationship"
          type="text"
          name="relationship"
          value={emergencyRelationship}
          placeholder="Add Relationship"
          onChange={e => setEmergencyRelationship(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div id="make-public-or-private-container">
        <h3 id="public-or-private-button-text">
          By clicking the following button, I agree to allow a message to be
          sent to the emergency contact number listed above.
        </h3>
        <div>
          <button
            id="make-public-or-private-button"
            onClick={e => toggleSendMessage(e)}
          >
            Send Text to Contact
          </button>
          {sendMessage && (
            <img
              src={require("../assets/check_mark_success.png")}
              alt="Send text message confirmation"
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default EmergencyContactForm;
