import React, { useState, useContext } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import { deleteUserFromDB } from "../apiCalls/apiCalls";
import "../CheckOutForm/CheckOutForm.css";

const CheckOutForm = () => {
  const { currentUsers, setCurrentUsers } = useContext(UsersContext);
  const [search, updateSearch] = useState("");

  const deleteUser = async id => {
    await deleteUserFromDB(id);
    let filteredUsers = currentUsers.original.filter(person => person.id != id);
    setCurrentUsers({ result: filteredUsers, original: filteredUsers });
  };

  let namesArray = !search ? currentUsers.original : currentUsers.result;
  let namesList = namesArray.map((name, index) => {
    return (
      <div className="CheckOutForm_visitor button push" id="push" key={index}>
        <p id="person-name">{name.name}</p>
        <button id="delete-visitor-button" onClick={() => deleteUser(name.id)}>
          <img
            id="delete-visitor-button-img"
            alt="circle with an x inside"
            src={require("../assets/delete-button.svg")}
          />
        </button>
      </div>
    );
  });

  const handleSearch = e => {
    updateSearch(e.target.value);
    if (!e.target.value) {
      setCurrentUsers({
        original: currentUsers.original,
        result: currentUsers.original
      });
    } else {
      let filteredNames = currentUsers.result.filter(({ name }) =>
        name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setCurrentUsers({ ...currentUsers, result: filteredNames });
    }
  };

  return (
    <section className="CheckOutForm">
      <h1 id="checkout-form-text">Check-Out Visitor</h1>
      <input
        className="CheckOutForm_input"
        type="text"
        placeholder="Search the database..."
        name="search"
        value={search}
        onChange={handleSearch}
        autoComplete="off"
      />
      <div className="CheckOutForm_visitor-container">{namesList}</div>
    </section>
  );
};

export default CheckOutForm;
