import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchTaskers } from '../../actions/taskers_actions';
import TaskersIndex from './taskers_index';

const mapStateToProps = (state,ownProps) => {
return {

  taskers: Object.values(state.taskers)
};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTaskers: (taskCategory) => dispatch(fetchTaskers(taskCategory)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskersIndex);
