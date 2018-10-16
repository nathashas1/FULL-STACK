
import { combineReducers } from 'redux';

import entities from './entities_reducer';
import errors from './errors_reducer';

import session from './session_reducer';
import taskcategories from './task_category_reducer';
import taskers from './taskers_reducer';


const rootReducer = combineReducers({
  entities,
  session,
  errors,
  taskers,
  taskcategories
});

export default rootReducer;
