class Availability < ActiveRecord::Base
  validates :event_id, :date, :time_slot_bitmap, :user_id, presence: true
  validates :event_id, uniqueness: { scope: [:date, :user_id] }

  belongs_to :event

  belongs_to :user
end
