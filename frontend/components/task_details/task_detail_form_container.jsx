import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import TaskForm from './task_details_form';
import { saveTask } from '../../actions/tasks_actions';

// const mapStateToProps = state => {
//
// return {
//   taskCategories: Object.values(state.taskcategories)
// };
// };

const mapDispatchToProps = dispatch => {
  return {
  saveTask: (task) => dispatch(saveTask(task))
  };
};

export default connect(null, mapDispatchToProps)(TaskForm);
