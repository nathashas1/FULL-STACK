class Api::TaskcategoriesController < ApplicationController




  def index
    puts "Im in task category index controller"
     @task_categories = Taskcategory.all
     render "api/taskcategories/index"
  end
end
