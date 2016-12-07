class SightingsController < ApplicationController
    def welcome
    end
    
    def index
        @sightings = Sighting.all.paginate(page: params[:page], per_page: 10)
        @sightingz = Sighting.all
        respond_to do |format|
            format.html
            format.csv { send_data @sightingz.to_csv}
        end 
    end
 
    def new
        @sighting = Sighting.new
        #@sighting.user_id = params['user_id']
        @maximum_length = Sighting.validators_on( :notes ).first.options[:maximum]
        
    end
    
    def create
        @sighting = Sighting.new(sighting_params)
        if @sighting.save
            redirect_to user_path(current_user)
        else
            render 'new'
        end
    end
    def info
    end
    
        
    private 
    def sighting_params
        params.require(:sighting).permit(:location,:singing,:aggressive,:flying,:other, :notes,:user_id)
    end

    

end
