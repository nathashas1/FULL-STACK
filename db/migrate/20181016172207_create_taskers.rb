class CreateTaskers < ActiveRecord::Migration[5.2]
  def change
    create_table :taskers do |t|
      t.integer :user_id, null: false
      t.string :task_category, null: false
      t.string :contact, null: false
      t.string :title, null: false
      t.integer :hourly_rate, null: false
      t.string :city, null: false
      t.string :description, null: false

      t.timestamps
    end
      add_index :taskers, :user_id, unique: true
      
  end
end
