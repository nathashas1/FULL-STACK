import React from 'react';
import { Link } from 'react-router-dom';


const TaskerIndexItem = ({ tasker }) => {
  return (

<div className="taskerdetails">
  <div className="leftside">
      <img className="taskerphoto" src={tasker.photoUrl}/>
      <div className="task">
        <Link to={{ pathname: '/task', state: {tasker_id: tasker.id}}}   className="tasklink"> Select and Continue </Link>
      </div>
      <div className="chatcontainer">
        <div className="chattasker">
            You can chat with your Tasker,
          <br/>
            adjust task details,
            or change   <br/> task time after booking.</div>
      </div>
    </div>

  <div className="rightside">
    <div className="namerate">
      <div className="taskername">
        {tasker.firstname} {tasker.lastname}
      </div>
      <strong className="taskerrate"> ${tasker.hourly_rate}/hr </strong>
    </div>
    <div className="stars">
      39 {tasker.task_category} Tasks
      <br/>
      100% Positive
    </div>
    <div className="help">How I can help:   </div>
    <div className="description">
      {tasker.description}
    </div>

  </div>
</div>);


};

export default TaskerIndexItem;
