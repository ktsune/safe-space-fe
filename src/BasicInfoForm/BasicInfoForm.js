import React from "react";
import "./BasicInfoForm.css";

const BasicInfoForm = ({
  personName,
  setPersonName,
  personAge,
  setPersonAge,
  personPhone,
  setPersonPhone,
  personPrivacy,
  setPersonPrivacy
}) => {
  return (
    <form className="BasicInfoForm">
      <h1 id="basic-info-header">Basic Information:</h1>
      <div id="fullname-container">
        <label id="fullname-label" htmlFor="fullname">
          <span className="required-asterisk">*</span>Full Name:{" "}
        </label>
        <input
          id="fullname"
          type="text"
          placeholder="Add Full Name"
          onChange={e => setPersonName(e.target.value)}
          name="name"
          value={personName}
          autoComplete="off"
        />
      </div>
      <div id="age-container">
        <label id="age-label" htmlFor="age">
          <span className="required-asterisk">*</span>Age:
        </label>
        <input
          id="age"
          type="text"
          placeholder="Add Age"
          onChange={e => setPersonAge(e.target.value)}
          name="age"
          value={personAge}
          autoComplete="off"
        />
      </div>
      <div id="phone-container">
        <label id="phone-label" htmlFor="phone">
          Phone Number:
        </label>
        <input
          id="phone"
          type="text"
          placeholder="Add Phone Number"
          onChange={e => setPersonPhone(e.target.value)}
          name="phone"
          value={personPhone}
          autoComplete="off"
        />
      </div>
      <div id="privacy-container">
        <label id="privacy-label" htmlFor="privacy">
          Privacy:
        </label>
        <input id="privacy" type="checkbox" name="privacy" />
      </div>
    </form>
  );
};

export default BasicInfoForm;
