import React from 'react';
import { Link } from 'react-router-dom';


class TasksCreate extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleSubmit(e) {
    e.preventDefault();

    const task = Object.assign({},this.props.task,{tasker_id: this.props.location.state.tasker_id});
    this.props.createTask(task);
  }

  componentDidMount() {
   window.scrollTo(0,0);
   }

   render() {



     return(

      <button onClick={this.handleSubmit}> Click Me </button>



  );
  }

}


export default TasksCreate;
