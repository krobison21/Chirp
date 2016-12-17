class SightingsController < ApplicationController
    helper_method :sort_column, :sort_direction
    
    
    def welcome
    end
    
    def index
        @sightings = Sighting.all.order(sort_column+ " "+ sort_direction).paginate(page: params[:page], per_page: 10)
        @sightingz = Sighting.all
        respond_to do |format|
            format.html
            format.csv { send_data @sightingz.to_csv}
        end 
    end
 
    def new
        flash.clear
        @sighting = Sighting.new
        #@sighting.user_id = params['user_id']
        @maximum_length = Sighting.validators_on( :notes ).first.options[:maximum]
        
    end
    
    def create
        @sighting = Sighting.new(sighting_params)
        
        if @sighting.save 
            flash[:success] = "Thank you for contributing to the Tulane Mocking Bird Research Project! Your help is much appreciated!"
            redirect_to user_path(current_user)
        else
            render 'new'
        end
    end
    def info
    end
    private
    def sort_column
        Sighting.column_names.include?(params[:sort]) ? params[:sort] : "user_id"
    end
    private
    def sort_direction
        %w[asc desc].include?(params[:direction])?  params[:direction] : "asc"
    end
    private 
    def sighting_params
        params.require(:sighting).permit(:location,:typez, :singing,:aggressive,:flying,:other, :notes,:user_id)
    end
    
  

    

end
