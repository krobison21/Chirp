class SessionsController < ApplicationController
  def new
  end
  
  def create_fb
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to root_path
  end
  
  def create_reg
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      redirect_to root_path
    else
      flash[:notice] = 'Invalid email/password combination' # Not quite right!
      #render 'new', :notice => "Invalid email or password"
      puts 'Error'
      #WONT DISPLAY THE FLASH ERROR

    end
  end
  

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
