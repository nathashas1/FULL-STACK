import React from 'react';
import { Link } from 'react-router-dom';



class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    console.log("in index item",this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }




handleSubmit(e) {

  const task = Object.assign({},this.props.currentTask,{tasker_id: this.props.location.state.tasker_id});
  const {tasker_id, task_category, task_location, task_details , task_duration} = task; //destructuring
  const newObj = {tasker_id, task_category, task_location, task_details , task_duration};
  this.props.createTask(newObj).then(() => {
       this.props.history.push('/tasks');
   });

}


render() {
  return (


    <div className="taskitem">

     <div className="ctcategory">
     {this.props.task.task_category}
     </div>

     <div className="field">
      Tasker
     <div className="userinput">{this.props.task.tasker_firstname} {this.props.task.tasker_lastname}</div>
       </div>
       <img className="itemphoto" src={this.props.task.tasker_photo}/>

     <div className="field">
       Tasker Contact
     <div className="userinput">{this.props.task.contact}</div>
       </div>

      <div className="field">
       Tasker Rate
      <div className="userinput">{this.props.task.hourly_rate}</div>
        </div>

     <div className="field">
       Location
       <div className="userinput">{this.props.task.task_location}</div>
       </div>


     <div className="field">
     Duration
     <div className="userinput">{this.props.task.task_duration}</div>
       </div>

       <div className="field">
       Description
       <div className="userinput">{this.props.task.task_details}</div>
         </div>

           <div className="taskbutton">

            <button className="taskcreatebutton" onClick={() => this.props.deleteTask(this.props.task.id)}>Cancel</button>
         </div>
       </div>



 );


}
}



export default TaskIndexItem;
