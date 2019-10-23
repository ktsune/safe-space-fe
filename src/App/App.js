import React, { Component } from 'react'
import './App.css'
import SplashPage from '../SplashPage/SplashPage'
import LogInForm from '../LogInForm/LogInForm'
import CheckInForm from "../CheckInForm/CheckInForm";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
  uri: 'https://safe-space-be.herokuapp.com/graphql',
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      reliefCenters: [],
      reliefCenterID: "4",
      isLoading: false
    };
  }

  selectPin = () => {
    console.log('test')
  }

  //add componentDidMount to fetch relief center data
  // once fetched, set isLoading to false

  render() {
    return (
      <ApolloProvider client={client}>
        <section className="App">
          <Route exact path="/">
            {this.state.isLoading ? (
              <SplashPage />
            ) : (
              <LogInForm
                reliefCenterID={this.state.reliefCenterID}
                reliefCenters={this.state.reliefCenters}
                selectPin={this.selectPin}
              />
            )}
          </Route>
          {/* <Route exact path='/supplies' render={() => < /> */}
          <Route exact path="/check-in" component={CheckInForm} />
          <Route exact path="/check-out" component={CheckOutForm} />
        </section>
      </ApolloProvider>
    );
  }
}

export default App;
