import React from 'react';
import { Link } from 'react-router-dom';

class TaskersIndex extends React.Component {
  componentDidMount() {
 console.log("props of taskers index" ,this.props);
   this.props.fetchTaskers(this.props.location.state.task_category);
   }


   render() {
     console.log("props of taskers index" ,this.props);
     return(
       <h1>hello</h1>
  );
}

}


export default TaskersIndex;
