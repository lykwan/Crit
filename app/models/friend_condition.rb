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

class FriendCondition < ActiveRecord::Base

  validates :condition, :friend_user_id, presence: true
  validates :condition_id, uniqueness: { scope: :friend_user_id }

  belongs_to :condition

  belongs_to :friend,
    primary_key: :id,
    foreign_key: :friend_user_id,
    class_name: :User

end
