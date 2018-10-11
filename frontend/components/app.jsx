import React from 'react';
import { Route, Switch, HashRouter, Link, Redirect } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Welcome to Ask Rabbit</h1>
      </Link>
      <GreetingContainer />
    </header>

          <Route  path="/login" component={LogInFormContainer} />
          <Route  path="/signup" component={SignUpFormContainer} />


  </div>
);

export default App;
