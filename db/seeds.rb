# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
u1 = User.create(name: 'Bob Dylan', email: nil, provider: 'facebook',uid: '12345',oauth_token: 'abcd', oauth_expires_at: '2017', is_researcher: false, password: 'facebook', password_confirmation: 'facebook')
Sighting.create(location: 'Boggs', behavior: 'Singing', user_id: u1.id)
Sighting.create(location: 'Stern', behavior: 'Flying', user_id: u1.id)



u2 = User.create(name: 'Madonna', email: nil, provider: 'facebook',uid: '222',oauth_token: 'defg', oauth_expires_at: '2017',is_researcher: false, password: 'facebook', password_confirmation: 'facebook')
Sighting.create(location: 'JBJ', behavior: 'Fighting', user_id: u2.id)
Sighting.create(location: 'LBC', behavior: 'Flying', user_id: u2.id)

u3 = User.create(name: 'Researcher', email: 'researcher@tulane.edu', provider: nil, uid: nil,oauth_token: nil, oauth_expires_at: nil,is_researcher: true, password: 'password', password_confirmation: 'password')