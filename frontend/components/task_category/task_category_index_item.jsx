import React from 'react';
import { Link } from 'react-router-dom';


const TaskCategoryIndexItem = ({ taskCategory }) => {
  return (
<div classname="link">
  
      <Link to="/login" >
        {taskCategory.name}
      </Link>
</div>
  );
};

export default TaskCategoryIndexItem;
