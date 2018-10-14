
import React from 'react';
import TaskCategoryIndexItem from './task_category_index_item';

class TaskCategoryIndex extends React.Component {
  componentDidMount() {
  
   this.props.fetchTaskCategories();
   }

   render() {
   const taskcategories = this.props.taskCategories.map(taskCategory => {
     return (
       <TaskCategoryIndexItem
         key={taskCategory.id}
         taskCategory={taskCategory}
          />
     );
   });

   return (
     <div>
       <ul>
         {taskcategories}
       </ul>

     </div>
   );
 }
}


export default TaskCategoryIndex;
