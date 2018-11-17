class Api::TasksController < ApplicationController

  def create
    puts "im in task create controller"
    @task = Task.new(task_params)
    @task.user_id = current_user.id
    # debugger
    if @task.save
      puts "im in task  saved"
      render "api/tasks/show"
    else
      render json: ["Give all task Details"]
    end
  end

  def index
     @tasks = Task.where(user_id: current_user.id).includes(tasker: [:user])
  end

  def destroy
    @task = Task.find(params[:id])
    if @task.destroy
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

private
  def task_params
    params.require(:task).permit(:tasker_id, :task_category, :task_location, :task_details , :task_duration)
  end

end
