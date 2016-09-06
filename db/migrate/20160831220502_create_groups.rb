class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :title, null: false, index: true
      t.text :description, null: false
      t.string :img, null: false, default: "http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg"
      t.boolean :is_public, default: false
      t.timestamps null: false
    end
  end
end
