require 'rails_helper'
describe SightingsController do
    
    describe 'Submit Sighting ' do
    
    it 'creates a new sighting object and adds it to database' do
        #@current_user = 
        @sighting = Sighting.new(location: "Boggs", singing: true, 
        aggressive: false, flying: true, other: nil, notes: nil, 
        user_id: 1)
        @sighting.save!
        @db_sighting = Sighting.find_by_location("Boggs")
        expect(@db_sighting).not_to be_nil
        expect(@db_sighting.location).to eq("Boggs")
        expect(@db_sighting.created_at).to eq(DateTime.now)
    end

    end
end