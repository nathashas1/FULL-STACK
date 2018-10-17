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
       <div>
        <ul>
          {taskers}
        </ul>
      </div>
  );
  }

}


export default TaskersIndex;
