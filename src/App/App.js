import React, { useState, useMemo } from 'react'
import './App.css'
import SplashPage from '../SplashPage/SplashPage'
import LogInForm from '../LogInForm/LogInForm'
import CheckInForm from "../CheckInForm/CheckInForm";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import SuppliesForm from "../SuppliesForm/SuppliesForm";
import { Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { CurrentCenterContext } from '../Contexts/CurrentCenterContext';
import { UsersContext } from '../Contexts/UsersContext';

const client = new ApolloClient({
  uri: 'https://safe-space-be.herokuapp.com/graphql',
});

const App = () => {
  const [reliefCenter, setreliefCenter] = useState('');
  const [currentUsers, setCurrentUsers] = useState({ result: [], original: [] })
  const [isCenterSelected, selectCenter] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const currentReliefCenter = useMemo(() => ({ reliefCenter, setreliefCenter }), [reliefCenter, setreliefCenter]);
  const users = useMemo(() => ({ currentUsers, setCurrentUsers }), [currentUsers, setCurrentUsers]);

    
    //add componentDidMount to fetch relief center data
    // once fetched, set isLoading to false
    
    return (
      <ApolloProvider client={client}>
      <section className="App">
        <CurrentCenterContext.Provider value={currentReliefCenter}>
          <UsersContext.Provider value={users}>
            <Route exact path="/">
              {isLoading ? (
                <SplashPage />
                ) : (
                  <LogInForm
                  selectCenter={selectCenter}
                  isCenterSelected={isCenterSelected}
                  reliefCenter={reliefCenter}
                  />
                  )}
            </Route>
            <Route exact path='/supplies' component={SuppliesForm} />
            <Route exact path="/check-in" component={CheckInForm} />
            <Route exact path="/check-out" component={CheckOutForm} />
          </UsersContext.Provider>
        </CurrentCenterContext.Provider>
      </section>
    </ApolloProvider>
  );
}

export default App;
