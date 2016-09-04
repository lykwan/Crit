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

require 'test_helper'

class AvailabilityBitmapTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
