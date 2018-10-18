class Tasker < ApplicationRecord

  validates :task_category, :contact, :title, :hourly_rate, :city, :description,  presence: true

  has_one_attached :photo
  belongs_to :user
end
