import React from 'react';
import { Link } from 'react-router-dom';


class TasksCreate extends React.Component {
  constructor(props) {
    super(props);
    console.log("im task create page state", this.state);
    console.log("im task create page props", this.props);
    this.state = {
      taskLocation: '',
      taskDuration: '',
      taskDetails: '',
      tasker: '',
      taskCategory: ''

      // this.setState({...this.state, [tasker_id]: this.props.location.state.tasker_id})
    };

  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createTask(this.state);
  }

  componentDidMount() {
   window.scrollTo(0,0);
   }

   render() {



     return(

        <h1>hello</h1>



  );
  }

}


export default TasksCreate;
