class Tasker < ApplicationRecord

  validates :user_id, :task_category, :contact, :title, :hourly_rate, :city, :description,  presence: true

  
end
