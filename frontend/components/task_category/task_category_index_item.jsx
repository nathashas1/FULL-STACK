import React from 'react';
import { Link } from 'react-router-dom';


const TaskCategoryIndexItem = ({ taskcategory }) => {
  return (
  <Link to={{ pathname: '/taskdetails', state: {taskCategory: taskcategory.name}}} className="eachCategory">
    {taskcategory.name}
  </Link>
);
};

export default TaskCategoryIndexItem;
