
export const fetchTaskers = (taskCategory) => (
  $.ajax({
    method: 'GET',
    url: `/api/taskers?task_category=${taskCategory}`,
  })
);
