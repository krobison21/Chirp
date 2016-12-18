require 'csv'
class BehaviorValidator < ActiveModel::Validator
    def validate(record) 
        if record.singing=='0' and record.aggressive=='0' and record.flying=='0' and record.other=='0'
            record.errors[:base] << "Behavior cannot be blank. Please select at least one option."
        end
            
    end

end
class Sighting < ActiveRecord::Base
    belongs_to :user
    validates :location, :presence => {:message => "cannot be blank. Please drag the pin to select." }
    validates_length_of :notes, :maximum => 150
    validates_with BehaviorValidator
    validates :typez, :presence => {:message => "cannot be blank. Please select an option." }
    
    def self.to_csv
        CSV.generate do |csv|
            csv << column_names
            all.each do |sighting|
                csv<< sighting.attributes.values_at(*column_names)
            end
        end
    end

    

end