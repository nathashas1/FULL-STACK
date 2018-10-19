import * as APIUtil from '../util/taskers_util';
export const FETCH_TASKERS = 'FETCH_TASKERS';
// export const CLEARFETCH_TASKERS = 'CLEARFETCH_TASKERS';




export const fetchTaskers = (taskCategory) => dispatch => (
  APIUtil.fetchTaskers(taskCategory).then(taskers => (dispatch(receiveTaskers(taskers)))

));



export const receiveTaskers = (taskers) => ({
  type: FETCH_TASKERS,
  taskers
});

// export const clearFetchtaskers = (taskers) => ({
//   type: CLEARFETCH_TASKERS,
//   taskers
// });
