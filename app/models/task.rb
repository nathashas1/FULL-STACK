class Task < ApplicationRecord

  validates :task_category, :task_location, :task_details, :task_duration,  presence: true


  belongs_to :user
  belongs_to :tasker
end
