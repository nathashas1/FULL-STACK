class Removeindex < ActiveRecord::Migration[5.2]
  def change
    remove_index :tasks, column: :user_id
  end
end
