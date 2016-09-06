class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :name, null: false
      t.string :img, default: "https://s-media-cache-ak0.pinimg.com/236x/39/51/66/395166785942e7f4098fb27b5dc8b3d2.jpg"
      t.text :description
      t.index :username, unique: true
      t.index :session_token, unique: true
      t.timestamps null: false
    end
  end
end
