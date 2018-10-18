import React from 'react';
import { Link } from 'react-router-dom';
import  TaskIndexItem  from './task_index_item';

class TasksIndex extends React.Component {
  componentDidMount() {
   this.props.fetchTasks();
   window.scrollTo(0,0);
   }

   render() {



     return(

        <h1>hello</h1>


      
  );
  }

}


export default TasksIndex;
