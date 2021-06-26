class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    user = User.new(users_params)
    if user.save
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def users_params
    params.require(:user).permit(:first_name, :last_name)
  end
end
