class CreateGroupMemberships < ActiveRecord::Migration
  def change
    create_table :group_memberships do |t|
      t.integer :group_id, null: false
      t.integer :member_user_id, null: false
      t.boolean :is_admin
      t.timestamps null: false
    end
    add_index :group_memberships, [:member_user_id, :group_id], unique: true
    add_index :group_memberships, :group_id
  end
end
