# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create(name: 'Bob Dylan', email: nil, provider: 'facebook',uid: '12345',oauth_token: 'abcd', oauth_expires_at: '2017', is_researcher: false, password: 'facebook', password_confirmation: 'facebook')
Sighting.create(location: '-90.12894327173528, 29.93695318873563', typez:"bird", singing: "1", aggressive: "0", flying: "1", other: "0", notes: "", user_id: u1.id)
Sighting.create(location: '-90.12049401917717, 29.94149090337295', typez:"bird", singing: "1", aggressive: "1", flying: "0", other: "1", notes: "2 birds", user_id: u1.id)


u2 = User.create(name: 'Madonna', email: nil, provider: 'facebook',uid: '222',oauth_token: 'defg', oauth_expires_at: '2017',is_researcher: false, password: 'facebook', password_confirmation: 'facebook')
Sighting.create(location: '-90.12067182122472, 29.941292969406106', typez:"bird", singing: "0", aggressive: "1", flying: "1", other: "1", notes: "",  user_id: u2.id)
Sighting.create(location: '-90.12030704079874, 29.941125624412848', typez:"Nest", singing: "1", aggressive: "0", flying: "0", other: "0", notes: "Nest with eggs", user_id: u2.id)

u3 = User.create(name: 'Researcher', email: 'researcher@tulane.edu', provider: "created", uid: nil,oauth_token: nil, oauth_expires_at: nil,is_researcher: true, password: 'password', password_confirmation: 'password')

u4 = User.create(name: 'Billy', email: 'billy@tulane.edu', provider: 'created',uid: '', oauth_token: '', oauth_expires_at: '',is_researcher: false, password: 'password', password_confirmation: 'password')
Sighting.create(location: '-90.2459561279306, 29.888230511268134', typez:"bird", singing: "1", aggressive: "0", flying: "1", other: "0", notes: "",  user_id: u4.id)

u5 = User.create(name: 'Penelope', email: 'penelope@tulane.edu', provider: 'created',uid: nil, oauth_token: nil, oauth_expires_at: nil,is_researcher: false, password: 'password', password_confirmation: 'password')

u6 = User.create(name: 'Francesca', email: nil, provider: 'guest',uid: nil, oauth_token: nil, oauth_expires_at: nil,is_researcher: false, password: 'password', password_confirmation: 'password')
Sighting.create(location: '-90.12030000000013, 29.94059519634287', typez:"bird", singing: "1", aggressive: "0", flying: "1", other: "0", notes: "",  user_id: u6.id)

u7 = User.create(name: 'Bob', email: nil, provider: 'guest',uid: nil, oauth_token: nil, oauth_expires_at: nil,is_researcher: false, password: 'password', password_confirmation: 'password')
