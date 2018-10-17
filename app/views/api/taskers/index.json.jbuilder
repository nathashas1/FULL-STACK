@taskers.each do |tasker|
   json.set! tasker.id do
   json.extract! tasker, :id, :contact, :title, :hourly_rate, :city, :description, :task_category
   end
 end
