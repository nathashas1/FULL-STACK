

import React from 'react';
import { Link,withRouter } from 'react-router-dom';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
  }

const inputbtn = document.getElementById('elem');






  render() {
  return (

    <div className="formContainer">

      <div className="describeTask">
        Describe Your Task:
      </div>

      <div className="weNeed">
      We need these inputs to show only qualified and available Taskers for the job.
    </div>

        <form action="#">


        <div className="optionContainer">
          <h3 className="detailheading">TASK INTEREST</h3>
          <br/>
          <br/>

          <h4>What brings you here today?</h4>
          <br/>
          <ul className="ul">

          <li>
            <input id='elem' name="group1" type="radio"  />
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

          <button className="session-submitdemo" >Continue</button>
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
      <button className="continue-demo" >Continue</button>
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
    <button className="continue-demo" >Continue</button>
  </div>

      </form>
    </div>


  );
  }

}

export default withRouter(TaskForm);
