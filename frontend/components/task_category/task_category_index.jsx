
import React from 'react';
import TaskCategoryIndexItem from './task_category_index_item';

class TaskCategoryIndex extends React.Component {
  componentDidMount() {

   this.props.fetchTaskCategories();
   this.handleSearch = this.handleSearch.bind(this);
   }
   handleSearch() {
     return{

     };
   }

   render() {
     return(
       <div className="categories-container">
          

    <div className="categories-bar">

        <button
        onClick={this.handleSearch()}
          >Mounting & Installation</button>

        <button
          onClick={this.handleSearch()}
          >Moving & Packing</button>

        <button
          onClick={this.handleSearch()}
          >Furniture Assembly</button>

      <button
          onClick={this.handleSearch()}
          >Home Improvement</button>

        <button
          onClick={this.handleSearch()}
          >General Handyman</button>

        <button
          onClick={this.handleSearch()}
          >Heavy Lifting</button>


    </div>
     </div>
  );
}

}


export default TaskCategoryIndex;
