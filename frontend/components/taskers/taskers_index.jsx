import React from 'react';
import { Link } from 'react-router-dom';
import  TaskerIndexItem  from './tasker_index_item';
import  Calendar  from './calendar';
import Footer from "../footer/footer_component";

class TaskersIndex extends React.Component {
  componentDidMount() {
   this.props.fetchTaskers(this.props.taskCategory);
   window.scrollTo(0,0);
     this.calendarChange = this.calendarChange.bind(this);
   }


calendarChange() {
  return (e) => {
    this.props.addDate(e.target.value);
  };

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
         <div>
           <div className="viewTasker">
             <Link to={`/taskdetails/${this.props.taskCategory}`}  className="linkfade">1. Fill Out Task Details</Link>
               <div className="bold">2. View Taskers & Prices</div>
                <div className="fade">3. Confirm & Book</div>
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
       <Footer />
      </div>
  );
  }

}


export default TaskersIndex;
