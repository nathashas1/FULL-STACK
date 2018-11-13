
import React from 'react';
import TaskImages  from '../task_details/task_images/task_images';
import { Link } from 'react-router-dom';
import Footer from "../footer/footer_component";
import TaskCategoryIndexItem from './task_category_index_item';

class TaskCategoryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTaskCategories();
   window.scrollTo(0,0);
   }


render() {
  const taskCategories = this.props.taskCategories.map(taskCategory => {
   return (
     <TaskCategoryIndexItem
       key={taskCategory.id}
       taskcategory={taskCategory} />
   );
 });


  return(
    <div>
    <div>
       <div className="categories-container">
        <div className="categories-bar">

          <div className="maintitle">The convenient & affordable way

          to get things done around the home</div>
          <div className="subTitle">
              Choose from over 140,000 vetted Taskers for help without breaking the bank.
            </div>

    <ul className="alltaskCategories">
       {taskCategories}
     </ul>

         <div className="searchContainer"  >
           <i className="fas fa-search"></i>

             < input type="search" className="search" placeholder="Need Somthing different?" />
             </div>

       </div>

        </div>
        <TaskImages />

   </div>
   <Footer />
   </div>
);
}

}




export default TaskCategoryIndex;
