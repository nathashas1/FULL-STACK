import React from 'react';
import { Link } from 'react-router-dom';
import  TaskIndexItem  from './task_index_item';

class TasksIndex extends React.Component {
  componentDidMount() {
   this.props.fetchTasks();
   window.scrollTo(0,0);
   }

   render() {
     const tasks = this.props.tasks.map(task => {
      return (
        <TaskIndexItem
          key={task.id}
          task={task} />
      );
    });


     return(
       <div className="fullTasksPage">


      <ul className="alltasks">

          {tasks}

        </ul>
      </div>
  );
  }

}


export default TasksIndex;
