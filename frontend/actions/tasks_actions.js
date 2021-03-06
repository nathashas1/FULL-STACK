import * as APIUtil from '../util/task_util';
export const CREATE_TASK = 'CREATE_TASK';
export const SAVE_TASK = 'SAVE_TASK';
export const ADD_DATE = 'ADD_DATE';
export const FETCH_TASKS = 'FETCH_TASKS';
export const REMOVE_TASK = 'REMOVE_TASK';




export const createTask = (task) => dispatch => (
  APIUtil.createTask(task).then(task => (dispatch(receiveTask(task)))

));

export const fetchTasks = (userId) => dispatch => (
  APIUtil.fetchTasks(userId).then(tasks => (dispatch(receiveAlltasks(tasks)))

));


export const deleteTask = taskId => dispatch => (
  APIUtil.deleteTask(taskId).then(task => dispatch(removeTask(taskId)))
);


export const receiveAlltasks = (tasks) => ({
  type: FETCH_TASKS,
  tasks
});

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


const removeTask = taskId => ({
  type: REMOVE_TASK,
  taskId
});
