class SightingsController < ApplicationController
    def welcome
    end
    
    def index
        @sightings = Sighting.all
    end
    def new
        @sighting = Sighting.new
    end
    def create
        @sighting = Sighting.new(sighting_params)
        if @sighting.save
            redirect_to '/sightings'
        else
            render 'new'
        end
    end
    
        
    private 
    def sighting_params
        params.require(:sighting).permit(:username, :location)
    end

    

end
