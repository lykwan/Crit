class CreateAvailabilityBitmaps < ActiveRecord::Migration
  def change
    create_table :availability_bitmaps do |t|
      t.integer :event_id, null: false
      t.integer :user_id, null: false
      t.date :date, null: false, index: true
      t.integer :time_slots, null: false
      t.timestamps null: false
    end
    add_index :availability_bitmaps, [:event_id, :user_id, :date], unique: true
  end
end
