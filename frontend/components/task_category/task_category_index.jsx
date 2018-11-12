
import React from 'react';
import TaskImages  from '../task_images/task_images';
import { Link } from 'react-router-dom';
import Footer from "../footer/footer_component";
import TaskCategoryIndexItem from './task_category_index_item';

class TaskCategoryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTaskCategories();
   window.scrollTo(0,0);
   }

//    render() {
//      return(
//   <div>
//    <div className="categories-container">
//     <div className="categories-bar">
//
//       <div className="maintitle">The convenient & affordable way
//
//       to get things done around the home</div>
//       <div className="subTitle">
//           Choose from over 140,000 vetted Taskers for help without breaking the bank.
//         </div>
//       <div className="splashlinks">
//         <Link to={{ pathname: '/taskdetails', state: {taskCategory: "Mounting and Installation"}}} className="linkclass">
//           Mounting and Installation
//         </Link>
//
//         <Link to={{ pathname: '/taskdetails', state: {taskCategory: "Moving and Packing"}}} className="linkclass">
//           Moving and Packing
//         </Link>
//
//         <Link to={{ pathname: '/taskdetails', state: {taskCategory: "Furniture Assembly"}}} className="linkclass">
//           Furniture Assembly
//         </Link>
//
//         <Link to={{ pathname: '/taskdetails', state: {taskCategory: "Home Improvement"}}} className="linkclass">
//           Home Improvement
//         </Link>
//
//         <Link to={{ pathname: '/taskdetails', state: {taskCategory: "General Handyman"}}} className="linkclass">
//           General Handyman
//         </Link>
//
//         <Link to={{ pathname: '/taskdetails', state: {taskCategory: "Heavy Lifting"}}} className="linkclass">
//           Heavy Lifting
//         </Link>
//       </div>
//       <div className="searchContainer"  >
//         <i className="fas fa-search"></i>
//
//           < input type="search" className="search" placeholder="Need Somthing different?" />
//           </div>
//
//     </div>
//
//      </div>
//      <TaskImages />
// </div>
//
//   );
// }

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
