import React from 'react';
import { Link } from 'react-router-dom';


const TaskCategoryIndexItem = ({ taskCategory }) => {
  return (
    <li>
      <Link to="/login">
        {taskCategory.name}
      </Link>&nbsp;

    </li>);
};

export default TaskCategoryIndexItem;
