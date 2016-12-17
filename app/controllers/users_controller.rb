class UsersController < ApplicationController
    helper_method :sort_column, :sort_direction
    
    def createaccount
    end
    
    def index
     @users = User.all.order(sort_column + " " + sort_direction).paginate(page: params[:page], per_page: 10)
 

    end

    def new
        @user = User.new
    end
    
    def newguest
        @user = User.new
    end
    
    def create
        @user = User.new(user_params)
        if @user.save
            session[:user_id] = @user.id
            redirect_to root_path
        else
            if @user.is_created?
                render 'new'
            else
                render 'newguest'
            end
            #flash[:error] = @users.errors # Not quite right!
        end
    end
    
    def show
        @user = User.find(params[:id])
        @sightings = @user.sightings.all.paginate(page: params[:page], per_page: 10)
    end
    private
    def sort_column
         User.column_names.include?(params[:sort]) ? params[:sort] : "user"
    end
    private
    def sort_direction
         %w[asc desc].include?(params[:direction])?  params[:direction] : "asc"
    end
    private
    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation, :provider)
    end
end
