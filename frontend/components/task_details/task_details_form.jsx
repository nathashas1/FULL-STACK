

import React from 'react';
import { Link,withRouter } from 'react-router-dom';


class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.myFunctionOne = this.myFunctionOne.bind(this);
    this.myFunctionTwo = this.myFunctionTwo.bind(this);
    this.myFunctionThree = this.myFunctionThree.bind(this);

  }



   myFunctionOne() {
      // var myWindow = window.scrollTo( 0, 300 );
      // myWindow.focus();
      var myWindow = window.scrollTo({
    top: 300,
    behavior: "smooth"
});

  }

  myFunctionTwo() {
     // var myWindow = window.scrollTo( 0, 300 );
     // myWindow.focus();
     var myWindow = window.scrollTo({
   top: 600,
   behavior: "smooth"
});

 }

 myFunctionThree() {
    // var myWindow = window.scrollTo( 0, 300 );
    // myWindow.focus();
    var myWindow = window.scrollTo({
  top: 900,
  behavior: "smooth"
});

}


  render() {
console.log("props of task detail form", this.props);

  return (

    <div className="formContainer">

        <div className="describeTask">
          Describe Your Task:
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
            <input name="group1" type="radio"  />
            <span className="span">I'm ready to book right now</span>
          </li>


          <li>
            <input  name="group1" type="radio" />
            <span className="span">I'm interested in booking sometime soon</span>
          </li>


          <li>
            <input  name="group1" type="radio"  />
            <span className="span">I'm just browsing</span>
          </li>

          <button className="session-submitdemo" onClick={()=>this.myFunctionOne()}>Continue</button>

      </ul>
      </div>



      <div className="optionContainer2">
        <h3 className="detailheading">YOUR TASK LOCATION</h3>
          <br/>
      <label>
        <input type="text"
          placeholder="Enter street address"
          className="addressContainerinput"
        />
      </label>
      <button className="continue-demo" onClick={()=>this.myFunctionTwo()}>Continue</button>
    </div>



    <div className="optionContainer3">
      <h3 className="detailheading">TASK OPTIONS</h3>
        <br/>
          <h4 className="h4">How big is your task?</h4>
            <label>
              <input name="group3" type="radio" checked />
              <span className="span2">Small - Est-1 hr</span>
            </label>
            <label>
              <input name="group3" type="radio" checked />
              <span className="span2">Medium - Est- 2-3 hrs</span>
            </label>
            <label>
              <input name="group3" type="radio" checked />
              <span className="span2">Large - Est- 4+ hrs</span>
            </label>
    <button className="secondcontinue-demo" onClick={()=>this.myFunctionThree()}>Continue</button>
  </div>


  <div className="optionContainer3">
    <h3 className="detailheading">TELL US THE DETAILS OF YOUR TASK</h3>
      <br/>
        <h4 className="h4details">Start the conversation and tell your Tasker what you need done.
          This helps us show you only qualified and available Taskers for the job.
          Don't worry, you can edit this later.</h4>

        <textarea class="textarea"  placeholder="Provide a summary of what you need done for your Tasker.
          Be sure to include details like the size of your space, any equipment/tools needed, and how to get in."></textarea>




        <Link to={{ pathname: '/taskers', state: {taskCategory: this.props.location.state.taskCategory}}}  className="lastcontinue-demo" >See Taskers & Prices</Link>
      </div>


      </form>
    </div>


  );
  }

}

export default withRouter(TaskForm);
