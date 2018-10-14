import { FETCH_TASKCATEGORIES } from '../actions/taskcategory_actions';
import  merge  from 'lodash/merge';

const taskCategoryReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case FETCH_TASKCATEGORIES:
    return merge({}, state, action.taskcategories);
    default:
      return state;
  }
};

export default taskCategoryReducer;
