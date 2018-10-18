import React from 'react';
import { Link } from 'react-router-dom';


const TaskerIndexItem = ({ tasker }) => {
  return (

<div>


        {tasker.title}
        {tasker.task_category}
        {tasker.description}
        {tasker.contact}
        {tasker.hourly_rate}
        {tasker.city}
</div>);


};

export default TaskerIndexItem;
