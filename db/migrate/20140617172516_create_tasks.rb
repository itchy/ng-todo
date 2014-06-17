class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :state
      t.string :body

      t.timestamps
    end
  end
end
