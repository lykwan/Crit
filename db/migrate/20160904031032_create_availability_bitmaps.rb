class CreateAvailabilityBitmaps < ActiveRecord::Migration
  def change
    create_table :availability_bitmaps do |t|
      t.integer :event_response_id, null: false
      t.date :date, null: false, index: true
      t.integer :time, null: false, limit: 8
      t.timestamps null: false
    end
    add_index :availability_bitmaps, [:event_response_id, :date], unique: true
  end
end
