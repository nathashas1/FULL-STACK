# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
Taskcategory.delete_all
Tasker.delete_all


Taskcategory.create!(
  name: 'Mounting & Installation'
)

Taskcategory.create!(
  name: 'Moving & Packing'
)

Taskcategory.create!(
  name: 'Furniture Assembly'
)

Taskcategory.create!(
  name: 'Home Improvement'
)

Taskcategory.create!(
  name: 'General Handyman'
)

Taskcategory.create!(
  name: 'Heavy Lifting'
)

User.create!(
  username: 'guest',
  password: 'password',
  firstname: 'guest',
  lastname: 'guest',
  zipcode: 94105
)


Tasker.create!(
  task_category: 'Mounting & Installation',
  contact: "tasker1@gmail.com",
  title: "Im a mounting helper",
  contact: "tasker1@gmail.com",
  hourly_rate: 45,
  city: "San Francisco",
  description: "I am good at my job.I have completed 100 mounting tasks so far",
  user_id: 1
)

Tasker.create!(
  task_category: 'Moving & Packing',
  contact: "tasker2@gmail.com",
  title: "Im a moving & packing helper",
  hourly_rate: 42,
  city: "San Francisco",
  description: "I am good at my job.I have completed 100 moving tasks so far",
  user_id: 2
)

Tasker.create!(
  task_category: 'Furniture Assembly',
  contact: "tasker3@gmail.com",
  title: "Im a furniture Assembly helper",
  hourly_rate: 20,
  city: "San Francisco",
  description: "I am good at my job.I have completed 100 assemblytasks so far",
  user_id: 3
)

Tasker.create!(
  task_category: 'Home Improvement',
  contact: "tasker4@gmail.com",
  title: "Im a home improvement helper",
  hourly_rate: 30,
  city: "San Francisco",
  description: "I am good at my job.I have completed 100 home improvement tasks so far",
  user_id: 4
)

Tasker.create!(
  task_category: 'General Handyman',
  contact: "tasker5@gmail.com",
  title: "Im a handyman helper",
  hourly_rate: 46,
  city: "San Francisco",
  description: "I am good at my job.I have completed 100 handyman tasks so far",
  user_id: 5
)

Tasker.create!(
  task_category: 'Heavy Lifting',
  contact: "tasker5@gmail.com",
  title: "Im a lifting helper",
  hourly_rate: 35,
  city: "San Francisco",
  description: "I am good at my job.I have completed 100 lifting tasks so far",
  user_id: 6
)
