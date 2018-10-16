import { FETCH_TASKERS } from '../actions/taskers_actions';
import  merge  from 'lodash/merge';

const taskersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case FETCH_TASKERS:
    return merge({}, state, action.taskers);
    default:
      return state;
  }
};

export default taskersReducer;
