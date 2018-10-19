class Api::TasksController < ApplicationController

  def create
    @task = Task.new(task_params)
    @task.user_id = current_user.id
    if @task.save
      render "api/tasks/show"
    else
      render json: ["Give all task Details"], status: 401
    end
  end

  def index
     @tasks = Task.where(user_id: current_user.id)
  end

private
  def task_params
    params.require(:task).permit(:tasker_id, :task_category, :task_location, :details )
  end

end
