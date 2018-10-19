import {
  CREATE_TASK
} from '../actions/tasks_actions';
import merge from 'lodash/merge';

const TasksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case CREATE_TASK:
      return merge({}, action.posts);
    default:
      return oldState;
  }
};

export default TasksReducer;
