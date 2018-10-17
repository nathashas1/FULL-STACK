
import React from 'react';
import TaskCategoryIndexItem from './task_category_index_item';
import { Link } from 'react-router-dom';

class TaskCategoryIndex extends React.Component {
  // componentDidMount() {
  //
  //  this.props.fetchTaskCategories();
  //  // this.handleSearch = this.handleSearch.bind(this);
  //  }
   // handleSearch() {
   //   return{
   //
   //   };
   // }

   render() {
     return(
       <div className="categories-container">


    <div className="categories-bar">

      <Link to={{ pathname: '/taskdetails', state: {taskCategory: "Mounting & Installation"}}} className="linkclass">
        Mounting and Installation
      </Link>

      <Link to={{ pathname: '/taskdetails', state: {taskCategory: "Moving & Packing"}}} className="linkclass">
        Moving and Packing
      </Link>

      <Link to={{ pathname: '/taskdetails', state: {taskCategory: "Furniture Assembly"}}} className="linkclass">
        Furniture Assembly
      </Link>

      <Link to={{ pathname: '/taskdetails', state: {taskCategory: "Home Improvement"}}} className="linkclass">
        Home Improvement
      </Link>

      <Link to={{ pathname: '/taskdetails', state: {taskCategory: "General Handyman"}}} className="linkclass">
        General Handyman
      </Link>

      <Link to={{ pathname: '/taskdetails', state: {taskCategory: "Heavy Lifting"}}} className="linkclass">
        Heavy Lifting
      </Link>

    </div>
     </div>
  );
}

}


export default TaskCategoryIndex;
