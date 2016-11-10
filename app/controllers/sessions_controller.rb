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
      render 'new'
      flash[:error] = 'Invalid email/password combination' # Not quite right!

    end
  end
  

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
