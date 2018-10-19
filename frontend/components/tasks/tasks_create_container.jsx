import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createTask } from '../../actions/tasks_actions';
import TasksCreate from './tasks_create';

const mapStateToProps = (state) => {
return {
  task: state.currentTask,
};
};

const mapDispatchToProps = dispatch => {
  return {
    createTask: (task) => dispatch(createTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksCreate);
