import * as APIUtil from '../util/task_util';
export const CREATE_TASK = 'CREATE_TASK';
export const SAVE_TASK = 'SAVE_TASK';
export const ADD_DATE = 'ADD_DATE';




export const createTask = (task) => dispatch => (
  APIUtil.createTask(task).then(task => (dispatch(receiveTask(task)))

));




export const receiveTask = (task) => ({
  type: CREATE_TASK,
  task
});


export const saveTask = (task) => ({
  type: SAVE_TASK,
  task
});

export const addDate = (date) => ({
  type: ADD_DATE,
  date
});
