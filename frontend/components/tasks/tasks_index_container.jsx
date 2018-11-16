import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createTask } from '../../actions/tasks_actions';
import TasksIndex from './tasks_index';

const mapStateToProps = (state) => {
return {
  task: state.currentTask,
};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: (userId) => dispatch(fetchTasks(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksIndex);
