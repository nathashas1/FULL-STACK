

import React from 'react';


class TaskForm extends React.Component {
  constructor(props) {
    super(props);
  }



   myFunction() {
      // var myWindow = window.open("", "", "width=200,height=100");
      // myWindow.document.write("<p>A new window!</p>");
      // myWindow.focus();
    var myWindow = window.scrollTo( 0, 200 );
    myWindow.focus();
  }



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

          <button className="session-submitdemo" onClick={()=>this.myFunction()}>Continue</button>

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
    <button className="secondcontinue-demo" >Continue</button>
  </div>

  <div className="optionContainer3">
    <h3 className="detailheading">TELL US THE DETAILS OF YOUR TASK</h3>
      <br/>
        <h4 className="h4details">Start the conversation and tell your Tasker what you need done.
          This helps us show you only qualified and available Taskers for the job.
          Don't worry, you can edit this later.</h4>

        <textarea class="textarea"  placeholder="Provide a summary of what you need done for your Tasker.
          Be sure to include details like the size of your space, any equipment/tools needed, and how to get in."></textarea>




        <button className="lastcontinue-demo" >See Taskers & Prices</button>
      </div>


      </form>
    </div>


  );
  }

}

export default(TaskForm);
