@tasks.each do |task|
   json.set! task.id do
   json.extract! task, :id, :task_category, :task_location, :task_details, :task_duration
   json.contact task.tasker.contact
   json.tasker_photo url_for(task.tasker.photo)
   json.tasker_firstname task.tasker.user.firstname
   json.tasker_lastname task.tasker.user.lastname
   json.hourly_rate task.tasker.hourly_rate
   end
 end
