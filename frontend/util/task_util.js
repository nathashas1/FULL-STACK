
export const createTask = (task) =>
 (
  $.ajax({
    method: 'POST',
    url: `/api/tasks`,
    data: {task}
  })
);



export const fetchTasks = (userId) =>
 (
  $.ajax({
    method: 'GET',
    url: `/api/tasks?user_id=${userId}`,
  })
);

export const deleteTask = id => (
  $.ajax({
    url: `/api/tasks/${id}`,
    method: 'DELETE'
  })
);
