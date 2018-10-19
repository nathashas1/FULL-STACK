# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Taskcategory.destroy_all
Tasker.destroy_all


Taskcategory.create!(
  name: 'Mounting'
)

Taskcategory.create!(
  name: 'Moving'
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

User.create!(
  username: 'guest2',
  password: 'password',
  firstname: 'Spider',
  lastname: 'Man',
  zipcode: 94105
)

User.create!(
  username: 'guest3',
  password: 'password',
  firstname: 'Super',
  lastname: 'Man',
  zipcode: 94105
)

User.create!(
  username: 'guest4',
  password: 'password',
  firstname: 'Bat',
  lastname: 'Man',
  zipcode: 94105
)

User.create!(
  username: 'guest5',
  password: 'password',
  firstname: 'Ralph',
  lastname: 'Man',
  zipcode: 94105
)

User.create!(
  username: 'guest6',
  password: 'password',
  firstname: 'Bret',
  lastname: 'Man',
  zipcode: 94105
)

User.create!(
  username: 'guest7',
  password: 'password',
  firstname: 'Don',
  lastname: 'Bos',
  zipcode: 94105
)

User.create!(
  username: 'guest8',
  password: 'password',
  firstname: 'Kim',
  lastname: 'Kim',
  zipcode: 94105
)

User.create!(
  username: 'guest9',
  password: 'password',
  firstname: 'Paul',
  lastname: 'Chap',
  zipcode: 94105
)

User.create!(
  username: 'guest10',
  password: 'password',
  firstname: 'Mike',
  lastname: 'Mike',
  zipcode: 94105
)

User.create!(
  username: 'guest11',
  password: 'password',
  firstname: 'Ran',
  lastname: 'Dan',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Sam',
  lastname: 'Mathew',
  zipcode: 94105
)


Tasker.create!(
  task_category: 'Mounting and Installation',
  contact: "tasker1@gmail.com",
  title: "Im a mounting helper",
  hourly_rate: 45,
  city: "San Francisco",
  description: "I am good at my job.I have completed 100 mounting tasks so far.
  Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
   A veterian of Takl and Handy Pro platforms.",
  user: User.all[0]
)
Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{10}.jpg"),filename:"10.jpg")

Tasker.create!(
  task_category: 'Moving and Packing',
  contact: "tasker2@gmail.com",
  title: "Im a moving & packing helper",
  hourly_rate: 42,
  city: "San Francisco",
  description: "I am good at my job.I have completed 100 moving tasks so far.
  Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
   A veterian of Takl and Handy Pro platforms.",
  user: User.all[1]
)
Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{11}.jpg"),filename:"11.jpg")


Tasker.create!(
  task_category: 'Furniture Assembly',
  contact: "tasker3@gmail.com",
  title: "Im a furniture Assembly helper",
  hourly_rate: 20,
  city: "San Francisco",
  description: "I am good at my job.I have completed 100 assemblytasks so far.
  Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
   A veterian of Takl and Handy Pro platforms.",
  user: User.all[2]
)
Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{12}.jpg"),filename:"12.jpg")


Tasker.create!(
  task_category: 'Home Improvement',
  contact: "tasker4@gmail.com",
  title: "Im a home improvement helper",
  hourly_rate: 30,
  city: "San Francisco",
  description: "I am good at my job.I have completed 100 home improvement tasks so far.
  Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
   A veterian of Takl and Handy Pro platforms.",
  user: User.all[3]
)
Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{13}.jpg"),filename:"13.jpg")


Tasker.create!(
  task_category: 'General Handyman',
  contact: "tasker5@gmail.com",
  title: "Im a handyman helper",
  hourly_rate: 46,
  city: "San Francisco",
  description: "I am good at my job.I have completed 100 handyman tasks so far.
  Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
   A veterian of Takl and Handy Pro platforms.",
  user: User.all[4]
)
Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{14}.jpg"),filename:"14.jpg")


Tasker.create!(
  task_category: 'Heavy Lifting',
  contact: "tasker6@gmail.com",
  title: "Im a lifting helper",
  hourly_rate: 35,
  city: "San Francisco",
  description: "I am good at my job.I have completed 100 lifting tasks so far.
  Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
   A veterian of Takl and Handy Pro platforms.",
  user: User.all[5]
)
Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{15}.jpg"),filename:"15.jpg")


Tasker.create!(
  task_category: 'Mounting and Installation',
  title: "Im a mounting helper",
  contact: "tasker7@gmail.com",
  hourly_rate: 33,
  city: "San Jose",
  description: "I will help you get the task done.
  Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
   A veterian of Takl and Handy Pro platforms.",
  user: User.all[6]
)
Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{16}.jpg"),filename:"16.jpg")


Tasker.create!(
  task_category: 'Mounting and Installation',
  title: "Im a mounting helper",
  contact: "tasker8@gmail.com",
  hourly_rate: 39,
  city: "San Ramon",
  description: "I have done 87 mounting tasks so far.
  Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
   A veterian of Takl and Handy Pro platforms.",
  user: User.all[7]
)
Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{18}.jpg"),filename:"18.jpg")


Tasker.create!(
  task_category: 'Mounting and Installation',
  title: "Im a mounting helper",
  contact: "tasker9@gmail.com",
  hourly_rate: 47,
  city: "Sansome",
  description: "I am good at mounting.My keen attention to details, make hanging arts & pictures more aesthetically pleasing.
  Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
   A veterian of Takl and Handy Pro platforms.",
  user: User.all[8]
)
Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{19}.jpg"),filename:"19.jpg")


Tasker.create!(
  task_category: 'Mounting and Installation',
  title: "Im a mounting helper",
  contact: "tasker10@gmail.com",
  hourly_rate: 53,
  city: "Dublin",
  description: "I am experienced in mounting.
  Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
   A veterian of Takl and Handy Pro platforms.",
  user: User.all[9]
)
Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{20}.jpg"),filename:"20.jpg")


Tasker.create!(
  task_category: 'Mounting and Installation',
  title: "Im a mounting helper",
  contact: "tasker11@gmail.com",
  hourly_rate: 33,
  city: "Pleasanton",
  description: "I have been doing mounting for the last 5 years.
  Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
   A veterian of Takl and Handy Pro platforms.",
  user: User.all[10]
)
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{21}.jpg"),filename:"21.jpg")
