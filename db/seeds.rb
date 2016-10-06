# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
s1 = Sighting.create(username: 'Jane Doe', location: 'Boggs', behavior: 'Singing')
s2 = Sighting.create(username: 'John Doe',location: 'Stern', behavior: 'Flying')
s3 = Sighting.create(username: 'Jim',location: 'JBJ', behavior: 'Fighting')