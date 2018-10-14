import React from 'react';


class TaskCategoryShow extends React.Component {
  componentDidMount() {
    console.log("im mounted in task_category_show");
   // this.props.fetchTaskCategories();
   }

   render() {
     return (
     <h1>hello im in  task category show</h1>
     );
 //   const taskCategories = this.props.taskCategories.map(taskCategory => {
 //     return (
 //       <TaskCategoryIndexItem
 //         key={taskCategory.id}
 //         taskCategory={taskCategory}
 //          />
 //     );
 //   });
 //
 //   return (
 //     <div>
 //       <ul>
 //         {taskCategories}
 //       </ul>
 //
 //     </div>
 //   );
 }
}


export default TaskCategoryShow;
