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
         <div className="viewTasker">
           <div>1. Fill Out Task Details</div>
             <div>2. View Taskers & Prices</div>
              <div>3. Confirm & Book</div>
                </div>
         <div className="security">
           <div className="trust"> Trust & Safety Guarantee : </div>

             <div className="vet">All Taskers are fully vetted & background checked.</div>

         </div>

<div className="tcreate">
        <div className="tconfirm">Confirm & Book</div>
      <div>
      {this.props.currentTask.task_category}
      </div>
      <div>
      {this.props.currentTask.date}
      </div>
      <div>
      {this.props.currentTask.task_location}
      </div>
      <div>
      {this.props.currentTask.task_duration}
      </div>
      <div>
      {this.props.location.state.tasker_firstname} {this.props.location.state.tasker_lastname}
      </div>
            <button className="taskcreatebutton" onClick={this.handleSubmit()}> Confirm </button>
  </div>

</div>

  );
  }

}


export default TasksCreate;
