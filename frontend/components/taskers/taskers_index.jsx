import React from 'react';
import { Link } from 'react-router-dom';
import  TaskerIndexItem  from './tasker_index_item';

class TaskersIndex extends React.Component {
  componentDidMount() {
   this.props.fetchTaskers(this.props.taskCategory);
   window.scrollTo(0,0);
   }

   // componentWillUnmount(){
   //   return this.props.clearFetchtaskers();
   // }

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

           <div className="viewTasker">
             <div>1. Fill Out Task Details</div>
               <div>2. View Taskers & Prices</div>
                <div>3. Confirm & Book</div>
                  </div>
           <div className="security"></div>

         <div className="pickTasker">Pick a Tasker</div>
         <div className="pickText">After booking, you can chat with your Tasker, agree on an exact time, or go over any requirements or questions, if necessary.</div>


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
