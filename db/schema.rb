# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160906053014) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "availabilities", force: :cascade do |t|
    t.integer  "event_id",         null: false
    t.integer  "user_id",          null: false
    t.date     "date",             null: false
    t.integer  "time_slot_bitmap", null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "availabilities", ["date"], name: "index_availabilities_on_date", using: :btree
  add_index "availabilities", ["event_id", "user_id", "date"], name: "index_availabilities_on_event_id_and_user_id_and_date", unique: true, using: :btree

  create_table "conditions", force: :cascade do |t|
    t.integer  "event_response_id", null: false
    t.integer  "min_num_people"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "conditions", ["event_response_id"], name: "index_conditions_on_event_response_id", unique: true, using: :btree

  create_table "event_responses", force: :cascade do |t|
    t.integer  "event_id",          null: false
    t.integer  "respondee_user_id", null: false
    t.string   "response",          null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "event_responses", ["event_id", "respondee_user_id"], name: "index_event_responses_on_event_id_and_respondee_user_id", unique: true, using: :btree
  add_index "event_responses", ["respondee_user_id"], name: "index_event_responses_on_respondee_user_id", using: :btree

  create_table "events", force: :cascade do |t|
    t.string   "title",                                                                                                      null: false
    t.text     "description",                                                                                                null: false
    t.integer  "group_id",                                                                                                   null: false
    t.integer  "host_user_id",                                                                                               null: false
    t.string   "location"
    t.string   "img",                    default: "http://cdn.andersonacres.com/wp-content/uploads/2007/09/corgi-party.JPG"
    t.boolean  "is_attendees_finalized", default: false
    t.boolean  "is_time_finalized",      default: false
    t.datetime "start_date",                                                                                                 null: false
    t.datetime "end_date",                                                                                                   null: false
    t.datetime "created_at",                                                                                                 null: false
    t.datetime "updated_at",                                                                                                 null: false
  end

  add_index "events", ["group_id"], name: "index_events_on_group_id", using: :btree
  add_index "events", ["host_user_id"], name: "index_events_on_host_user_id", using: :btree

  create_table "friend_conditions", force: :cascade do |t|
    t.integer  "condition_id",   null: false
    t.integer  "friend_user_id", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "friend_conditions", ["condition_id", "friend_user_id"], name: "index_friend_conditions_on_condition_id_and_friend_user_id", unique: true, using: :btree
  add_index "friend_conditions", ["friend_user_id"], name: "index_friend_conditions_on_friend_user_id", using: :btree

  create_table "group_memberships", force: :cascade do |t|
    t.integer  "group_id",       null: false
    t.integer  "member_user_id", null: false
    t.boolean  "is_admin"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "group_memberships", ["group_id"], name: "index_group_memberships_on_group_id", using: :btree
  add_index "group_memberships", ["member_user_id", "group_id"], name: "index_group_memberships_on_member_user_id_and_group_id", unique: true, using: :btree

  create_table "groups", force: :cascade do |t|
    t.string   "title",                                                                                                    null: false
    t.text     "description",                                                                                              null: false
    t.string   "img",         default: "http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg", null: false
    t.boolean  "is_public",   default: false
    t.datetime "created_at",                                                                                               null: false
    t.datetime "updated_at",                                                                                               null: false
  end

  add_index "groups", ["title"], name: "index_groups_on_title", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                            null: false
    t.string   "password_digest",                                                                                                     null: false
    t.string   "session_token",                                                                                                       null: false
    t.string   "name",                                                                                                                null: false
    t.string   "img",             default: "https://s-media-cache-ak0.pinimg.com/236x/39/51/66/395166785942e7f4098fb27b5dc8b3d2.jpg"
    t.text     "description"
    t.datetime "created_at",                                                                                                          null: false
    t.datetime "updated_at",                                                                                                          null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
