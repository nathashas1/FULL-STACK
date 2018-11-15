import React from 'react';
import { Link } from 'react-router-dom';


class TasksCreate extends React.Component {
  constructor(props) {
    super(props);
    console.log("in task",this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

    const task = Object.assign({},this.props.currentTask,{tasker_id: this.props.location.state.tasker_id});
    const {tasker_id, task_category, task_location, task_details , task_duration} = task; //destructuring
    const newObj = {tasker_id, task_category, task_location, task_details , task_duration};
    this.props.createTask(newObj);
  }

  componentDidMount() {
   window.scrollTo(0,0);
   }



   render() {
     return(
       <div className="taskfullpage">
<div className="taskcreate">
  <div className="tasktext">Create Task!</div>

      <button className="taskcreatebutton" onClick={this.handleSubmit()}> Confirm </button>
</div>
</div>

  );
  }

}


export default TasksCreate;
