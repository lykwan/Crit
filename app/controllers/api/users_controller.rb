class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render(
        json: @user.errors.full_messages,
        status: 422
      )
    end
  end

  def show
    @user = User.find_by_id(params[:id])
    if @user
      render :show
    else
      render(
        json: ['Cannot find user'],
        status: 404
      )
    end
  end

  def update
  end

  def index
    if params[:query]
      @users = User.where("name LIKE '#{params[:query]}%'").includes(:groups)
    else
      @users = User.all.where("id != '#{current_user.id}'").includes(:groups)
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :name)
  end

end
