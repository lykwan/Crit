# == Schema Information
#
# Table name: group_memberships
#
#  id             :integer          not null, primary key
#  group_id       :integer          not null
#  member_user_id :integer          not null
#  is_admin       :boolean
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class GroupMembership < ActiveRecord::Base

  validates :group, :member_user_id, presence: true
  validates :member_user_id, uniqueness: { scope: :group_id }

  belongs_to :group

  belongs_to :member,
    primary_key: :id,
    foreign_key: :member_user_id,
    class_name: :User

end
