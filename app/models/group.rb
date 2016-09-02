# == Schema Information
#
# Table name: groups
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  is_public   :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Group < ActiveRecord::Base

  validates :title, :description, presence: true

  has_many :group_memberships, dependent: :destroy, inverse_of: :group

  has_many :members,
    through: :group_memberships,
    source: :member

  has_many :events, dependent: :destroy

  accepts_nested_attributes_for :group_memberships

  def admins
    self.members.where(group_memberships: { is_admin: true })
  end

  def regular_members
    self.members.where(group_memberships: { is_admin: false })
  end
end
