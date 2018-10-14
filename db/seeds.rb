# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all

Taskcategory.delete_all


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
