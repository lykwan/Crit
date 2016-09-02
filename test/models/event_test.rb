# == Schema Information
#
# Table name: events
#
#  id                     :integer          not null, primary key
#  title                  :string           not null
#  description            :text             not null
#  group_id               :integer          not null
#  host_user_id           :integer          not null
#  location               :string
#  img                    :string
#  is_attendees_finalized :boolean          default(FALSE)
#  is_time_finalized      :boolean          default(FALSE)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
