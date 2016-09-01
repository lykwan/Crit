class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :creator_user_id, null: false, index: true
      t.boolean :is_public, default: false
      t.timestamps null: false
    end
  end
end
