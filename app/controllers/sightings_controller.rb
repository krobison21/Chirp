class SightingsController < ApplicationController
    def welcome
    end
    
    def index
        @sightings = Sighting.all
    end
 
    def new
        @sighting = Sighting.new
        #@sighting.user_id = params['user_id']
        
    end
    
    def create
        @sighting = Sighting.new(sighting_params)
        if @sighting.save
            redirect_to '/sightings'
        else
            render 'new'
        end
    end
    def info
    end
    
        
    private 
    def sighting_params
        params.require(:sighting).permit(:location,:behavior,:user_id)
    end

    

end
