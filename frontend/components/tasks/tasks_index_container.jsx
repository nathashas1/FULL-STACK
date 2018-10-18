import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchTasks } from '../../actions/taskers_actions';
import TasksIndex from './tasks_index';

const mapStateToProps = (state,ownProps) => {
return {
  tasks: Object.values(state.tasks)
};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: (id) => dispatch(fetchTasks(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksIndex);
