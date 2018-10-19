import React from 'react';
import { Link } from 'react-router-dom';


class TasksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskLocation: '',
      taskDuration: '',
      taskDetails: '',
      tasker: '',
      taskCategory: ''
    };
console.log("props of task index",this.props);
  }


   render() {



     return(

        <h1>hello</h1>



  );
  }

}


export default TasksIndex;
