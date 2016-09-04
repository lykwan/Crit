class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :title, null: false, index: true
      t.text :description, null: false
      t.boolean :is_public, default: false
      t.timestamps null: false
    end
  end
end
