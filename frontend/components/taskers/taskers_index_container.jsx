import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchTaskers } from '../../actions/taskers_actions';
import TaskersIndex from './taskers_index';

const mapStateToProps = (state,ownProps) => {

return {

  taskCategory: state.currentTask.taskCategory,
  taskers: Object.values(state.taskers),
    currentTask: state.currentTask,

};

};

const mapDispatchToProps = dispatch => {
  return {
    fetchTaskers: (taskCategory) => dispatch(fetchTaskers(taskCategory)),
    clearFetchtaskers: () => dispatch(fetchTaskers([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskersIndex);
