import React from 'react';
import { Route, Switch, HashRouter, Link, Redirect } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import TaskCategoryIndexContainer from './task_category/task_category_index_container';
import TaskForm from './task_details/task_details_form';
import TaskersContainer from './taskers/taskers_index_container';
import TaskContainer from './taskers/taskers_index_container';


import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
          <GreetingContainer />
        </header>


    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/taskers" component={TaskersContainer} />
      <ProtectedRoute exact path="/taskdetails" component={TaskForm} />
      <ProtectedRoute exact path="/task" component={TaskContainer} />
      <Route  exact path="/" component={TaskCategoryIndexContainer} />
        <Redirect to="/login" />
</Switch>


  </div>
);

export default App;
