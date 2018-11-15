class Removeindextasker < ActiveRecord::Migration[5.2]
  def change
    remove_index :tasks, column: :tasker_id
  end
end
