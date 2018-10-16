
export const fetchTaskers = (taskCategory) => (
  $.ajax({
    method: 'GET',
    url: '/api/taskers',
    data: {taskCategory}
  })
);
