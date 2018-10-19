class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :user_id, null: false
      t.integer :tasker_id, null: false
      t.string :task_category, null: false
      t.string :task_location, null: false
      t.string :task_details, null: false
      t.string :task_duration, null: false

      t.timestamps
    end
      add_index :tasks, :user_id, unique: true
      add_index :tasks, :tasker_id, unique: true

  end
end
