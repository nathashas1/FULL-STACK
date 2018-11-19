import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchTaskCategories } from '../../actions/taskcategory_actions';
import TaskCategoryIndex from './task_category_index';
import { saveTask } from '../../actions/tasks_actions';

const mapStateToProps = state => {

return {
  taskCategories: Object.values(state.taskcategories)
};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTaskCategories: () => dispatch(fetchTaskCategories()),
    saveTask: (task) => dispatch(saveTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskCategoryIndex);
