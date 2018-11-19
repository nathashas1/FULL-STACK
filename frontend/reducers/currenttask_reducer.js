import { SAVE_TASK } from '../actions/tasks_actions';
import { ADD_DATE } from '../actions/tasks_actions';
import  merge  from 'lodash/merge';
import  {saveState}  from '../store/localStorage';

const currentTaskReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case SAVE_TASK:
    saveState(action.task);
    return action.task;

    case ADD_DATE:
    const currentTask = Object.assign({},state, {date:action.date});
    saveState(currentTask);
    return currentTask;

    default:
      return state;
  }
};

export default currentTaskReducer;
