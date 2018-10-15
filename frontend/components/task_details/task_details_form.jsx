

import React from 'react';
import { Link,withRouter } from 'react-router-dom';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);


  }








  render() {
  return (
    <div className="formContainer">

      <div className="describeTask">
        Describe Your Task:
      </div>

      <div className="weNeed">
      We need these inputs to show only qualified and available Taskers for the job.
      <div/>

        <form action="#" className="optionContainer">


          <h3 className="taskInterest">TASK INTEREST</h3>
                    <br/>
          <br/>

          <h4>What brings you here today?</h4>
          <br/>
          <ul className="ul">

          <li>
          <label>
            <input name="group1" type="radio" checked />
            <span className="span">I'm ready to book right now</span>
          </label>
        </li>


          <li>
          <label>
            <input name="group1" type="radio" />
            <span className="span">I'm interested in booking sometime soon</span>
          </label>
          </li>


          <li>
          <label>
            <input class="with-gap" name="group1" type="radio"  />
            <span className="span">I'm just browsing</span>
          </label>
          </li>
      </ul>

      </form>

</div>
</div>
  );
  }

}

export default withRouter(TaskForm);
