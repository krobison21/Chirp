require 'csv'
class Sighting < ActiveRecord::Base
    belongs_to :user
    validates :location, :presence => true
    validates_length_of :notes, :maximum => 150
    
    def self.to_csv
        CSV.generate do |csv|
            csv << column_names
            all.each do |sighting|
                csv<< sighting.attributes.values_at(*column_names)
            end
        end
    end

    def is_behaviorblank? 
          self.singing=='0' or self.aggressive=='0' or self.flying=='0' or self.other=='0'
    end

end