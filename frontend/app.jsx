import React from 'react';
import HomeContainer from './components/home/home_container';
import SessionFormContainer from './components/session/session_form_container';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { HashRouter, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
      <div>
        <header>
        </header>
          <Switch>
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SessionFormContainer} />
            <ProtectedRoute path="/" component={HomeContainer} />
          </Switch>
      </div>
  );
};

export default App;