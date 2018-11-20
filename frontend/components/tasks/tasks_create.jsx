import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../footer/footer_component";


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
    this.props.createTask(newObj).then(() => {
         this.props.history.push('/tasks');
     });

  }

  componentDidMount() {
   window.scrollTo(0,0);
   }




   render() {
     return(
       <div className="taskfullpage">
         <div className="viewTasker">
          <Link to={`/taskdetails/${this.props.currentTask.task_category}`}  className="linkfade">1. Fill Out Task Details</Link>
          <Link to={`/taskers`}  className="linkfade">2. View Taskers & Prices</Link>
              <div className="bold">3. Confirm & Book</div>
                </div>
         <div className="security">
           <div className="trust"> Trust & Safety Guarantee : </div>

             <div className="vet">All Taskers are fully vetted & background checked.</div>

         </div>


        <div className="tconfirm">Confirm & Book</div>
        <div className="alldetails">

      <div className="ctcategory">
      {this.props.currentTask.task_category}
      </div>

      <div className="field">
        Tasker

          <div className="userinput">{this.props.location.state.tasker_firstname} {this.props.location.state.tasker_lastname}</div>

    </div>
<img className="fieldphoto" src={this.props.location.state.tasker_photo}/>


  <div className="field">
    Tasker hourly Rate
    <div className="userinput">${this.props.location.state.tasker_rate}</div>
  </div>

      <div className="field">
        Date
        <div className="userinput">{this.props.currentTask.date}</div>
      </div>


      <div className="field">
        Location
        <div className="userinput">{this.props.currentTask.task_location}</div>
        </div>


      <div className="field">
      Duration
      <div className="userinput">{this.props.currentTask.task_duration}</div>
        </div>

        <div className="field">
        Description
        <div className="userinput">{this.props.currentTask.task_details}</div>
          </div>

            <div className="taskbutton">
            <button className="taskcreatebutton" onClick={() => this.handleSubmit()}> Confirm </button>
            </div>
</div>

<Footer/>
</div>

  );
  }

}


export default TasksCreate;
