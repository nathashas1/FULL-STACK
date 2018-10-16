import * as APIUtil from '../util/taskers_util';
export const FETCH_TASKERS = 'FETCH_TASKERS';




export const fetchTaskers = () => dispatch => (
  APIUtil.fetchTaskers().then(taskers => (dispatch(receiveTaskers(taskers)))

));



export const receiveTaskers = (taskers) => ({
  type: FETCH_TASKERS,
  taskers
});
