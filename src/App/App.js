import React, { Component } from "react";
import "./App.css";
import SplashPage from "../SplashPage/SplashPage";
import LogInForm from "../LogInForm/LogInForm";
import CheckInForm from "../CheckInForm/CheckInForm";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reliefCenters: [],
      reliefCenterID: "4",
      isLoading: false
    };
  }

  //add componentDidMount to fetch relief center data
  // once fetched, set isLoading to false

  render() {
    return (
      <section className="App">
        <Route exact path="/">
          {this.state.isLoading ? (
            <SplashPage />
          ) : (
            <LogInForm
              reliefCenterID={this.state.reliefCenterID}
              reliefCenters={this.state.reliefCenters}
            />
          )}
        </Route>
        {/* <Route exact path='/supplies' render={() => < /> */}
        <Route exact path="/check-in" component={CheckInForm} />
        <Route exact path="/check-out" component={CheckOutForm} />
      </section>
    );
  }
}

export default App;
