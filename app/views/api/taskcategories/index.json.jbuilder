 @task_categories.each do |task_category|
    json.set! task_category.id do
    json.extract! task_category, :id, :name
    end
  end
