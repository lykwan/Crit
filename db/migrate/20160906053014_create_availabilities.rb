class CreateAvailabilities < ActiveRecord::Migration
  def change
    create_table :availabilities do |t|
      t.integer :event_id, null: false
      t.integer :user_id, null: false
      t.date :date, null: false, index: true
      t.integer :time_slot_bitmap, null: false
      t.timestamps null: false
    end
    add_index :availabilities, [:event_id, :user_id, :date], unique: true
  end
end
