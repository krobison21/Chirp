# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
u1 = User.create(name: 'Bob Dylan', provider: 'facebook',uid: '12345',oauth_token: 'abcd', oauth_expires_at: '2017')
Sighting.create(location: 'Boggs', singing: true, aggressive: false, flying: true, other: false, notes: "", user_id: u1.id)
Sighting.create(location: 'Stern',singing: true, aggressive: true, flying: false, other: true, notes: "2 birds", user_id: u1.id)



u2 = User.create(name: 'Madonna', provider: 'facebook',uid: '222',oauth_token: 'defg', oauth_expires_at: '2017')
Sighting.create(location: 'JBJ', singing: false, aggressive: false, flying: false, other: false, notes: "",  user_id: u2.id)
Sighting.create(location: 'LBC', singing: false, aggressive: true, flying: false, other: true, notes: "Nest with eggs", user_id: u2.id)