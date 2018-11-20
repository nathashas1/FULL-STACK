import React from 'react';
import { Link } from 'react-router-dom';
import  TaskIndexItem  from './task_index_item';
import Footer from "../footer/footer_component";

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
           <div className="security">
              <img className="secimage" src={window.security}   />
             <div className="trust"> Trust & Safety Guarantee : </div>

               <div className="vet">All Taskers are fully vetted & background checked.</div>

           </div>


           <div className="tconfirm">Your created tasks</div>
       <ul className="taskindex">
           {tasks}
       </ul>
        <Footer />
</div>
     );
  }

}


export default TasksIndex;
