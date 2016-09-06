# == Schema Information
#
# Table name: availability_bitmaps
#
#  id                :integer          not null, primary key
#  event_response_id :integer          not null
#  date              :date             not null
#  time              :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class AvailabilityBitmap < ActiveRecord::Base

  validates :event_response, :date, presence: true
  validates :event_response, uniqueness: { scope: :date }

  belongs_to :event_response

  belongs_to :respondee,
    through: :event_response,
    source: :respondee

end
