import React from 'react';
import { Link } from 'react-router-dom';
import  TaskIndexItem  from './task_index_item';

class TasksIndex extends React.Component {
  componentDidMount() {
   this.props.fetchTasks(this.props.userId);
   window.scrollTo(0,0);
   }




   render() {
     const tasks = this.props.tasks.map(task => {
      return (
        <TaskIndexItem
          key={task.id}
          task={task}
          deleteTask={this.props.deleteTask} />
      );
    });
     return (
       <div className="fullTaskerPage">
         <div>
           <div className="viewTasker">
             <div>1. Fill Out Task Details</div>
               <div>2. View Taskers & Prices</div>
                <div>3. Confirm & Book</div>
                  </div>
           <div className="security">
             <div className="trust"> Trust & Safety Guarantee : </div>

               <div className="vet">All Taskers are fully vetted & background checked.</div>

           </div>

           </div>
           <div className="tconfirm">Your created tasks</div>
       <ul className="taskindex">
           {tasks}
       </ul>
</div>
     );
  }

}


export default TasksIndex;
