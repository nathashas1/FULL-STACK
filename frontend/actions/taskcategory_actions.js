import * as APIUtil from '../util/task_category_util';
export const FETCH_TASKCATEGORIES = 'FETCH_TASKCATEGORIES';




export const fetchTaskCategories = () => dispatch => (
  APIUtil.fetchTaskCategories().then(taskcategories => (dispatch(receiveTaskCategories(taskcategories)))

));



export const receiveTaskCategories = (taskcategories) => ({
  type: FETCH_TASKCATEGORIES,
  taskcategories
});
