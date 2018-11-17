import { CREATE_TASK } from '../actions/tasks_actions';
import { FETCH_TASKS } from '../actions/tasks_actions';
import { REMOVE_TASK } from '../actions/tasks_actions';

import merge from 'lodash/merge';

const TasksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case CREATE_TASK:
      return merge({}, oldState,{[action.task.id]: action.task});

    case FETCH_TASKS:
      return merge(action.tasks);

    case REMOVE_TASK:
      let newState = merge({}, oldState);
      delete newState[action.taskId];
      return newState;

    default:
      return oldState;
  }
};

export default TasksReducer;
