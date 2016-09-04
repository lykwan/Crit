class CreateEventResponses < ActiveRecord::Migration
  def change
    create_table :event_responses do |t|
      t.integer :event_id, null: false
      t.integer :respondee_user_id, null: false
      t.string :response, null: false
      t.timestamps null: false
    end
    add_index :event_responses, [:event_id, :respondee_user_id], unique: true
    add_index :event_responses, :respondee_user_id
  end
end
