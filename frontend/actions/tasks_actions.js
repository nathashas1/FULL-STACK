import * as APIUtil from '../util/taskers_util';
export const FETCH_TASKS = 'FETCH_TASKS';
export const SAVE_TASK = 'SAVE_TASK';




export const fetchTasks = (id) => dispatch => (
  APIUtil.fetchTasks(id).then(tasks => (dispatch(receiveTasks(tasks)))

));



export const receiveTasks = (tasks) => ({
  type: FETCH_TASKS,
  tasks
});


export const saveTask = (task) => ({
  type: SAVE_TASK,
  task
});
