import React from 'react';
import { Link } from 'react-router-dom';

class TaskersIndex extends React.Component {
  componentDidMount() {

   this.props.fetchTaskers(this.props.task_category);
   }


   render() {
     return(
       <h1>hello</h1>
  );
}

}


export default TaskersIndex;
