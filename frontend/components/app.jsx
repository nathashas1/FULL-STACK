import React from 'react';
import { Route, Switch, HashRouter, Link, Redirect } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
  

    <Switch>
<AuthRoute exact path="/" component={GreetingContainer} />
<AuthRoute exact path="/login" component={LogInFormContainer} />
<AuthRoute exact path="/signup" component={SignUpFormContainer} />

</Switch>


  </div>
);

export default App;
