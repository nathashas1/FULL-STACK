import { combineReducers } from 'redux';


import tasks from './tasks_reducer';
import users from './users_reducer';

export default combineReducers({
  tasks,
  users,
});
