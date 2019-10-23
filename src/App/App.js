import React, { Component } from 'react'
import './App.css'
import SplashPage from '../SplashPage/SplashPage'
import LogInForm from '../LogInForm/LogInForm'

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
      <section className="App">
        {this.state.isLoading ? <SplashPage /> : <LogInForm reliefCenterID={this.state.reliefCenterID} reliefCenters={this.state.reliefCenters}/>}
      </section>
    )
  }
}

export default App;
