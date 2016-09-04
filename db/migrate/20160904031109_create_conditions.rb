class CreateConditions < ActiveRecord::Migration
  def change
    create_table :conditions do |t|
      t.integer :event_response_id, null: false
      t.integer :min_num_people
      t.index :event_response_id, unique: true
      t.timestamps null: false
    end
  end
end
