import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchTasks, deleteTask } from '../../actions/tasks_actions';
import TasksIndex from './tasks_index';

const mapStateToProps = (state) => {
return {
  userId: state.session.id,
  tasks: Object.values(state.entities.tasks),
};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: (userId) => dispatch(fetchTasks(userId)),
    deleteTask: id => dispatch(deleteTask(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksIndex);
