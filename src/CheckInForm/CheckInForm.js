import React, { Component } from "react";
import ExtraItems from "../ExtraItems/ExtraItems";

class CheckInForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      items: [
        "baby wipes",
        "formula",
        "diapers",
        "breast feeding device",
        "feminine hygiene products",
        "android phone charger",
        "apple phone charger"
      ]
    };
  }
  render() {
    // let list = this.state.items.map(item => {
    //     return <div>
    //         <button onClick={this.toggleChecked}></button>
    //         <p>{item.name}</p>
    //         </div>
    // })
    return (
      <section>
        <input></input>
        <input></input>
        <input></input>
        <button></button>
        <ExtraItems items={this.state.items} />

        <button>Submit</button>
      </section>
    );
  }
}

export default CheckInForm;
