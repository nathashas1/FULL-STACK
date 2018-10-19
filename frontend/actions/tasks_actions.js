import * as APIUtil from '../util/taskers_util';
export const CREATE_TASK = 'CREATE_TASK';
export const SAVE_TASK = 'SAVE_TASK';




export const fetchTasks = (task) => dispatch => (
  APIUtil.createTask(task).then(task => (dispatch(createTask(task)))

));



export const createTask = (task) => ({
  type: CREATE_TASK,
  task
});


export const saveTask = (task) => ({
  type: SAVE_TASK,
  task
});
