import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import TasksCreate from "../tasks/tasks_create";


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    console.log("im calendar state", this.state);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default Calendar;
