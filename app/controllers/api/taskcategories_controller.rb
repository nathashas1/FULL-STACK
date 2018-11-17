class Api::TaskcategoriesController < ApplicationController




  def index
  
     @task_categories = Taskcategory.all
     render "api/taskcategories/index"
  end
end
