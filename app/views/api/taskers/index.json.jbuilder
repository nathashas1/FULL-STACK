@taskers.each do |tasker|
   json.set! tasker.id do
   json.extract! tasker, :id, :contact, :title, :hourly_rate, :city, :description, :task_category
   if tasker.photo.attached?
    json.photoUrl url_for(tasker.photo)
  end
   end
 end


# t1.photo.attach(io: File.open("/Users/priyeshnn/Desktop/AskRabbit/app/assets/images"),filename:"1.jpg") 
