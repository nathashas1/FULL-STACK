class CreateTaskcategory < ActiveRecord::Migration[5.2]
  def change
    create_table :taskcategories do |t|
      t.string :name, null: false
    end
    add_index :taskcategories, :name, unique: true
  end
end
