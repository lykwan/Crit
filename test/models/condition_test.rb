# == Schema Information
#
# Table name: conditions
#
#  id                :integer          not null, primary key
#  event_response_id :integer          not null
#  min_num_people    :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class ConditionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
