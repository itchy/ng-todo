class TasksController < ApplicationController
skip_before_action :verify_authenticity_token

  def index
    @tasks = Task.all.limit(1_000)

    respond_to do |format|
      format.html
      format.json { render json: @tasks.as_json(only: [:id, :body]) }
    end
  end

  def create
    @task = Task.create(_task_params)
    respond_to do |format|
      format.json { render json: @task, status: :ok }
    end
  end

  def update
    @task = Task.find(params[:id])
    @task.update_attributes(_task_params)
    respond_to do |format|
      format.json { render json: @task, status: :ok }
    end
  end

private
  def _task_params
    params.require(:task).permit(:body, :state)
  end
end