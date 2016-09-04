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

class Condition < ActiveRecord::Base

  validates :event_response, presence: true, uniqueness: true

  belongs_to :event_response

  has_many :friend_conditions, dependent: :destroy, inverse_of: :condition

  accepts_nested_attributes_for :friend_conditions



end
