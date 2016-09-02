# == Schema Information
#
# Table name: event_responses
#
#  id                :integer          not null, primary key
#  event_id          :integer          not null
#  respondee_user_id :integer          not null
#  response          :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class EventResponseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
