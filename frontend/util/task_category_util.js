export const fetchTaskCategories = () => (
  $.ajax({
    method: 'GET',
    url: '/api/taskcategories'

  })
);
