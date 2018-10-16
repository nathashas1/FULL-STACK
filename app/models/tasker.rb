class Tasker < ApplicationRecord

  validates :user_id, :task_category_id, :contact, :title, :hourly_rate, :city, :description,  presence: true

end
