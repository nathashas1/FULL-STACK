import React from 'react';
import { Link } from 'react-router-dom';


const TaskerIndexItem = ({ tasker }) => {
  return (

<div className="taskerdetails">

<img className="taskerphoto" src={tasker.photoUrl}/>
<div className="taskername">
  {tasker.firstname} {tasker.lastname}
<div className="taskerrate"></div>
</div>
<div className="stars">
  39 {tasker.task_category} Tasks
<br/>
  100% Positive
</div>
<div className="help">How I can help:

</div>
<div className="description">
{tasker.description}
</div>



</div>);


};

export default TaskerIndexItem;
