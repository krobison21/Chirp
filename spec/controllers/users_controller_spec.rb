require 'rails_helper'

describe UsersController do
    
    describe 'Creating User' do
    
    it 'creates a new user and adds user to database' do
        @user = User.new(name: "TestName", email: "test_email@email.com", password: 'test', password_confirmation: 'test' )
        @user.save!
        @db_user = User.find_by_name("TestName")
        expect(@db_user).not_to be_nil
        expect(@db_user.name).to eq("TestName")
    end
    
    #params = {user: {name: "TestName", email: "test_email@email.com", password: 'test', password_confirmation: 'test' }} 
    

    end
end