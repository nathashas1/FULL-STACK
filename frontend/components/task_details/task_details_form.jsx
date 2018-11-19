

import React from 'react';
import { Link,withRouter } from 'react-router-dom';


class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purpose: "",
      task_category: this.props.location.state.taskCategory,
      task_location: "",
      task_duration: "",
      task_details: "",
      purposeErrors: "",
      locationErrors: "",
      typeErrors: "",
      detailsErrors: ""
    };
    this.myFunctionOne = this.myFunctionOne.bind(this);
    this.myFunctionTwo = this.myFunctionTwo.bind(this);
    this.myFunctionThree = this.myFunctionThree.bind(this);
    this.myFunctionFour = this.myFunctionFour.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
   window.scrollTo(0,0);
   }


   myFunctionOne() {
     if (this.state.purpose === '') {
       this.setState({purposeErrors: "Must be chosen"});
     }else{
       this.setState({purposeErrors: ""});
     }
      var myWindow = window.scrollTo({
    top: 330,
    behavior: "smooth"
});

  }


  myFunctionTwo() {
    if (this.state.task_location === '') {
      this.setState({locationErrors: "Location is required"});
    }else{
      this.setState({locationErrors: ""});
    }
  var myWindow = window.scrollTo({
   top: 950,
   behavior: "smooth"
});

 }

 myFunctionThree() {
   if (this.state.task_duration === '') {
     this.setState({typeErrors: "Must be chosen"});
   }else{
     this.setState({typeErrors: ""});
   }
    var myWindow = window.scrollTo({
  top: 1250,
  behavior: "smooth"
});

}

myFunctionFour() {
  this.setState({locationErrors: ""});
   var myWindow = window.scrollTo({
 top: 800,
 behavior: "smooth"
});
this.setState({task_location: "825 battery street San Francisco"});
}




handleChange(type) {
  return(e) => {
    this.setState({[type]: e.target.value});
  };

  }


  render() {
    let newState = this.state;
  return (
    <div className="formContainer">

      <div className="viewTasker">
        <div>1. Fill Out Task Details</div>
          <div>2. View Taskers & Prices</div>
           <div>3. Confirm & Book</div>
             </div>
      <div className="security">
        <div className="trust"> Trust & Safety Guarantee : </div>

          <div className="vet">All Taskers are fully vetted & background checked.</div>

      </div>

        <div className="describeTask">
          Describe Your Task: {this.props.location.state.taskCategory}
        </div>

        <div className="weNeed">
        We need these inputs to show only qualified and available Taskers for the job.
        </div>

      <form>

        <div className="optionContainer">
          <h3 className="detailheading">TASK INTEREST</h3>
          <br/>
          <br/>

          <h4>What brings you here today?</h4>
          <br/>
          <ul className="ul">



          <li>
            <input name="group1" type="radio" value = "I'm ready to book right now" onChange={this.handleChange("purpose")} />
            <span className="span">I'm ready to book right now</span>
          </li>


          <li>
            <input  name="group1" type="radio" value = "I'm interested in booking sometime soon" onChange={this.handleChange("purpose")}/>
            <span className="span">I'm interested in booking sometime soon</span>
          </li>


          <li>
            <input  name="group1" type="radio" value = "I'm just browsing" onChange={this.handleChange("purpose")} />
            <span className="span">I'm just browsing</span>
          </li>

          <div className="formerrors">
          {this.state.purposeErrors}
          </div>
          <div className="oneclass">
          <span className="session-submitdemo" onClick={()=>this.myFunctionOne()}>Continue</span>
          </div>

      </ul>
      </div>




      <div className="optionContainer2">
        <h3 className="detailheading">YOUR TASK LOCATION</h3>
          <br/>
      <label className="addresslabel">
        <input type="text"
          placeholder="Enter street address"
          className="addressContainerinput"
          onChange={this.handleChange("task_location")}
          value={this.state.task_location}
        />
      </label>

      <div className="formerrors">
      {this.state.locationErrors}
      </div>
      <div className="oneclass">
      <span className="session-submitdemo" onClick={()=>this.myFunctionTwo()}>Continue</span>
      <span className="demoaddress"  onClick={()=>this.myFunctionFour()}>Demo Address</span>
        </div>
    </div>



  <div className="optionContainer3">
      <h3 className="detailheading">TASK OPTIONS</h3>
        <br/>
          <h4 className="h4">How big is your task?</h4>
          <div className="tasktype">
            <label>
              <input name="group3" type="radio" value = "1hr" onChange={this.handleChange("task_duration")} />
              <span className="span2">Small - Est-1 hr</span>
            </label>
            <label>
              <input name="group3" type="radio" value = "2-3hrs" onChange={this.handleChange("task_duration")} />
              <span className="span2">Medium - Est- 2-3 hrs</span>
            </label>
            <label>
              <input name="group3" type="radio" value = "4+hrs" onChange={this.handleChange("task_duration")} />
              <span className="span2">Large - Est- 4+ hrs</span>
            </label>
          </div>

          <div className="formerrors">
          {this.state.typeErrors}
          </div>
          <div className="oneclass">
            <span className="session-submitdemo" onClick={()=>this.myFunctionThree()}>Continue</span>
          </div>
      </div>


  <div className="optionContainer4">
    <h3 className="detailheading">TELL US THE DETAILS OF YOUR TASK</h3>
      <br/>
        <h4 className="h4details">Start the conversation and tell your Tasker what you need done.
          This helps us show you only qualified and available Taskers for the job.
          Don't worry, you can edit this later.</h4>

        <textarea className="textarea"  placeholder="Provide a summary of what you need done for your Tasker.
          Be sure to include details like the size of your space,
          any equipment/tools needed, and how to get in." onChange={this.handleChange("task_details")}></textarea>
        <h4 className="h4details">If you need two or more Taskers, please post additional tasks for each Tasker needed.</h4>


          <div className="formerrors">
          {this.state.detailsErrors}
          </div>
        <div className="oneclass">
        <div className="lastcontinue-demo">
        <Link to='/taskers' onClick={() => this.props.saveTask(this.state)} className="linkcontinue">See Taskers & Prices</Link>
        </div>
        </div>

      </div>


      </form>
    </div>


  );
  }

}

export default withRouter(TaskForm);
