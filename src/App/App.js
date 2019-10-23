import React, { Component } from 'react'
import './App.css'
import SplashPage from '../SplashPage/SplashPage'
import LogInForm from '../LogInForm/LogInForm'
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
    }
  }

  //add componentDidMount to fetch relief center data
  // once fetched, set isLoading to false

  render() {
    return (
      <ApolloProvider client={client}>
        <section className="App">
          {this.state.isLoading ? <SplashPage /> : <LogInForm reliefCenterID={this.state.reliefCenterID} reliefCenters={this.state.reliefCenters}/>}
        </section>
      </ApolloProvider>
    )
  }
}

export default App;
