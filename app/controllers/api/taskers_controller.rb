class Api::TaskersController < ApplicationController

  def create
    @tasker = Tasker.new(tasker_params)

    if @tasker.save
      @tasker.user_id = current_user.id
      render "api/taskers/show"
    else
      render json: @tasker.errors.full_messages, status: 422
    end
  end

  def show
     @tasker = Tasker.find(params[:id])
  end

private
  def tasker_params
    params.require(:tasker).permit(:contact, :title, :hourly_rate, :city, :description, :task_category)
  end

end
