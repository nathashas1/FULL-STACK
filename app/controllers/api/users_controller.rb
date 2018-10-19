class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      if params[:user][:password].length < 6
        render json: ["Password should be of 6 characters"], status: 401
      elsif params[:user][:username].length < 1
        render json: ["Username cant be blank"], status: 401
      else
        render json: ["Fill in all the details"], status: 401
      end
    end
  end

private
  def user_params
    params.require(:user).permit(:username, :password, :lastname, :firstname, :zipcode)
  end

end
