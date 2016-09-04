# == Schema Information
#
# Table name: friend_conditions
#
#  id             :integer          not null, primary key
#  condition_id   :integer          not null
#  friend_user_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class FriendConditionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
