class Api::TaskersController < ApplicationController

  def index
   @taskers = Tasker.where(task_category: params[:task_category]).includes(:user)
  end

private
  def tasker_params
    params.require(:tasker).permit(:contact, :title, :hourly_rate, :city, :description, :task_category)
  end

end
