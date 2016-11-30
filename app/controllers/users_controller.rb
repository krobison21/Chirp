class UsersController < ApplicationController
    def createaccount
    end
    
    def index
     @users = User.all.paginate(page: params[:page], per_page: 10)
 

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
            render 'new'
            #flash[:error] = @users.errors # Not quite right!
        end
    end
    
    def show
        @user = User.find(params[:id])
        @sightings = @user.sightings
    end
    
    private
    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation, :provider)
    end
end
