import React from 'react';
import { Link } from 'react-router-dom';
import  TaskerIndexItem  from './tasker_index_item';

class TaskersIndex extends React.Component {
  componentDidMount() {
   this.props.fetchTaskers(this.props.location.state.taskCategory);
   }

   render() {
     const taskers = this.props.taskers.map(tasker => {
      return (
        <TaskerIndexItem
          key={tasker.id}
          tasker={tasker} />
      );
    });


     return(
       <div className="fullTaskerPage">
         <div className="logoholder">
           <div className="logo"></div>
         </div>
           <div className="viewTasker"></div>
           <div className="security"></div>

         <div className="pickTasker">Pick a Tasker</div>
         <div className="pickText">After booking, you can chat with your Tasker, agree on an exact time, or go over any requirements or questions, if necessary.</div>
         <div className="sorted"></div>

      <ul className="alltaskers">
        <div className="calendar"><br/><br/>Select date<br/><br/>
        <input type="date"></input>
        </div>

          {taskers}

        </ul>
      </div>
  );
  }

}


export default TaskersIndex;
