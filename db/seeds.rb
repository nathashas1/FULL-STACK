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
  name: 'Mounting and Installation'
)

Taskcategory.create!(
  name: 'Moving and Packing'
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
  firstname: 'Gin',
  lastname: 'Sin',
  zipcode: 94105
)

User.create!(
  username: 'guest2',
  password: 'password',
  firstname: 'Han',
  lastname: 'Man',
  zipcode: 94105
)

User.create!(
  username: 'guest3',
  password: 'password',
  firstname: 'Din',
  lastname: 'Joy',
  zipcode: 94105
)

User.create!(
  username: 'guest4',
  password: 'password',
  firstname: 'Mik',
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
  lastname: 'Sim',
  zipcode: 94105
)

User.create!(
  username: 'guest13',
  password: 'password',
  firstname: 'Tuji',
  lastname: 'Tuji',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Luy',
  lastname: 'Luy',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Sij',
  lastname: 'Saj',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Sri',
  lastname: 'Sri',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Nat',
  lastname: 'Mat',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Nit',
  lastname: 'Nat',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Sob',
  lastname: 'Sib',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Rug',
  lastname: 'Rag',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Sre',
  lastname: 'Rug',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Rek',
  lastname: 'Rok',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Raj',
  lastname: 'Rej',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Bab',
  lastname: 'Baeb',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Ein',
  lastname: 'Pog',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Wik',
  lastname: 'Wiki',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Qor',
  lastname: 'Sim',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Sik',
  lastname: 'Tik',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Kol',
  lastname: 'Sim',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Sam',
  lastname: 'Jok',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Jig',
  lastname: 'Til',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Wof',
  lastname: 'Man',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Dok',
  lastname: 'Jok',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Dov',
  lastname: 'Dove',
  zipcode: 94105
)

User.create!(
  username: 'guest12',
  password: 'password',
  firstname: 'Rab',
  lastname: 'Din',
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

 Tasker.create!(
   task_category: 'Heavy Lifting',
   contact: "tasker11@gmail.com",
   title: "Im a lifting helper",
   hourly_rate: 39,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 lifting tasks so far.
   Experienced Task Rabbit for this job w/ countless professional lifting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[11]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab1}.jpg"),filename:"rab1.jpg")


 Tasker.create!(
   task_category: 'Heavy Lifting',
   contact: "tasker12@gmail.com",
   title: "Im a lifting helper",
   hourly_rate: 25,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 lifting tasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[12]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab2}.png"),filename:"rab2.png")



 Tasker.create!(
   task_category: 'Heavy Lifting',
   contact: "tasker13@gmail.com",
   title: "Im a lifting helper",
   hourly_rate: 23,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 lifting tasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[13]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab3}.jpg"),filename:"rab3.jpg")

 Tasker.create!(
   task_category: 'General Handyman',
   contact: "tasker14@gmail.com",
   title: "Im a handyman helper",
   hourly_rate: 36,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 handyman tasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[14]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab4}.jpg"),filename:"rab4.jpg")

 Tasker.create!(
   task_category: 'General Handyman',
   contact: "tasker15@gmail.com",
   title: "Im a handyman helper",
   hourly_rate: 34,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 handyman tasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[15]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab5}.jpeg"),filename:"rab5.jpeg")

 Tasker.create!(
   task_category: 'General Handyman',
   contact: "tasker16@gmail.com",
   title: "Im a handyman helper",
   hourly_rate: 46,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 handyman tasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[16]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab6}.jpg"),filename:"rab6.jpg")

 Tasker.create!(
   task_category: 'Home Improvement',
   contact: "tasker17@gmail.com",
   title: "Im a home improvement helper",
   hourly_rate: 30,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 home improvement tasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[17]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab7}.png"),filename:"rab7.png")


 Tasker.create!(
   task_category: 'Home Improvement',
   contact: "tasker18@gmail.com",
   title: "Im a home improvement helper",
   hourly_rate: 39,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 home improvement tasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[18]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab8}.jpg"),filename:"rab8.jpg")


 Tasker.create!(
   task_category: 'Home Improvement',
   contact: "tasker19@gmail.com",
   title: "Im a home improvement helper",
   hourly_rate: 45,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 home improvement tasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[19]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab9}.jpg"),filename:"rab9.jpg")

 Tasker.create!(
   task_category: 'Furniture Assembly',
   contact: "tasker20@gmail.com",
   title: "Im a furniture Assembly helper",
   hourly_rate: 20,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 assemblytasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[20]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab10}.jpg"),filename:"rab10.jpg")


 Tasker.create!(
   task_category: 'Furniture Assembly',
   contact: "tasker21@gmail.com",
   title: "Im a furniture Assembly helper",
   hourly_rate: 29,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 assemblytasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[21]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab11}.png"),filename:"rab11.png")


 Tasker.create!(
   task_category: 'Furniture Assembly',
   contact: "tasker22@gmail.com",
   title: "Im a furniture Assembly helper",
   hourly_rate: 42,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 assemblytasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[22]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab12}.jpg"),filename:"rab12.jpg")


 Tasker.create!(
   task_category: 'Furniture Assembly',
   contact: "tasker23@gmail.com",
   title: "Im a furniture Assembly helper",
   hourly_rate: 42,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 assemblytasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[23]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab19}.png"),filename:"rab19.png")


 Tasker.create!(
   task_category: 'Moving and Packing',
   contact: "tasker24@gmail.com",
   title: "Im a moving & packing helper",
   hourly_rate: 34,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 moving tasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[24]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab13}.jpg"),filename:"rab13.jpg")


 Tasker.create!(
   task_category: 'Moving and Packing',
   contact: "tasker25@gmail.com",
   title: "Im a moving & packing helper",
   hourly_rate: 39,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 moving tasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[25]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab14}.jpg"),filename:"rab14.jpg")


 Tasker.create!(
   task_category: 'Moving and Packing',
   contact: "tasker26@gmail.com",
   title: "Im a moving & packing helper",
   hourly_rate: 37,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 moving tasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[26]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab15}.jpg"),filename:"rab15.jpg")

 Tasker.create!(
   task_category: 'Moving and Packing',
   contact: "tasker27@gmail.com",
   title: "Im a moving & packing helper",
   hourly_rate: 43,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 moving tasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[27]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab16}.jpg"),filename:"rab16.jpg")


 Tasker.create!(
   task_category: 'Furniture Assembly',
   contact: "tasker28@gmail.com",
   title: "Im a furniture Assembly helper",
   hourly_rate: 42,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 assemblytasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[28]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab17}.jpg"),filename:"rab17.jpg")


 Tasker.create!(
   task_category: 'Heavy Lifting',
   contact: "tasker29@gmail.com",
   title: "Im a lifting helper",
   hourly_rate: 35,
   city: "San Francisco",
   description: "I am good at my job.I have completed 100 lifting tasks so far.
   Experienced Task Rabbit for this job w/ countless professional mounting experiences thru construction projects.
    A veterian of Takl and Handy Pro platforms.",
   user: User.all[29]
 )
 Tasker.last.photo.attach(io: File.open("#{Rails.root}/app/assets/images/#{rab18}.jpeg"),filename:"rab18.jpeg")
