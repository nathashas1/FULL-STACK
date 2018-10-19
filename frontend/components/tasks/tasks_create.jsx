import React from 'react';
import { Link } from 'react-router-dom';


class TasksCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskLocation: '',
      taskDuration: '',
      taskDetails: '',
      tasker: '',
      taskCategory: ''
    };

  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createTask(this.state);
  }

  componentDidMount() {
   window.scrollTo(0,0);
   }

   render() {



     return(

        <h1>hello</h1>



  );
  }

}


export default TasksCreate;
