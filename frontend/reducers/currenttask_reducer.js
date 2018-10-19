import { SAVE_TASK } from '../actions/tasks_actions';
import  merge  from 'lodash/merge';

const currentTaskReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case SAVE_TASK:
    return action.task;
    default:
      return state;
  }
};

export default currentTaskReducer;
