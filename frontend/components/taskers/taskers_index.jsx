import React from 'react';
import { Link } from 'react-router-dom';
import  TaskerIndexItem  from './tasker_index_item';
import  Calendar  from './calendar';

class TaskersIndex extends React.Component {
  componentDidMount() {
   this.props.fetchTaskers(this.props.taskCategory);
   window.scrollTo(0,0);
     this.calendarChange = this.calendarChange.bind(this);
   }

   // componentWillUnmount(){
   //   return this.props.clearFetchtaskers();
   // }


calendarChange() {
  return (e) => {
    this.props.addDate(e.target.value);
  };

}


// handleChange(type) {
//   return(e) => {
//     this.setState({[type]: e.target.value});
//   };
//
//   }

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
         <div>
           <div className="viewTasker">
             <div>1. Fill Out Task Details</div>
               <div>2. View Taskers & Prices</div>
                <div>3. Confirm & Book</div>
                  </div>
           <div className="security">
             <div className="trust"> Trust & Safety Guarantee : </div>

               <div className="vet">All Taskers are fully vetted & background checked.</div>

           </div>
           <div className="picks">
         <div className="pickTasker">Pick a Tasker</div>
         <div className="pickText">After booking, you can chat with your Tasker, agree on an exact time, or go over any
        requirements or questions, if necessary.</div>
           </div>
           </div>

           <div className="bottompart">
          <div className="calendar"><br/><br/>Select date<br/><br/>
          <input type="date" onChange={this.calendarChange()}></input>

            </div>


        <ul className="alltaskers">
            {taskers}
        </ul>
      </div>
      </div>
  );
  }

}


export default TaskersIndex;
