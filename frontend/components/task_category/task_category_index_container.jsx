import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchTaskCategories } from '../../actions/taskcategory_actions';
import TaskCategoryIndex from './task_category_index';

const mapStateToProps = state => {
return {
  // taskCategories: Object.values(state.taskcategories)
};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTaskCategories: () => dispatch(fetchTaskCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskCategoryIndex);
