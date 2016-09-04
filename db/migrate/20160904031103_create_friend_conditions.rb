class CreateFriendConditions < ActiveRecord::Migration
  def change
    create_table :friend_conditions do |t|
      t.integer :condition_id, null: false
      t.integer :friend_user_id, null: false
      t.timestamps null: false
    end
    add_index :friend_conditions, [:condition_id, :friend_user_id], unique: true
    add_index :friend_conditions, :friend_user_id
  end
end
