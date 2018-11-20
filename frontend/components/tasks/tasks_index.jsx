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
