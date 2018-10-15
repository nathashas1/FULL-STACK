
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

      <Link to="/taskdetails" className="linkclass">
        Mounting & Installation
      </Link>

      <Link to="/taskdetails" className="linkclass">
        Moving & Packing
      </Link>

      <Link to="/taskdetails" className="linkclass">
        Furniture Assembly
      </Link>

      <Link to="/taskdetails" className="linkclass">
        Home Improvement
      </Link>

      <Link to="/taskdetails" className="linkclass">
        General Handyman
      </Link>

      <Link to="/taskdetails" className="linkclass">
        Heavy Lifting
      </Link>

    </div>
     </div>
  );
}

}


export default TaskCategoryIndex;
