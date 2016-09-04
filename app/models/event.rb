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

class Event < ActiveRecord::Base

  validates :title, :description, :group_id, :host_user_id, presence: true

  belongs_to :group

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_user_id,
    class_name: :User

  has_many :event_responses, dependent: :destroy, inverse_of: :event

  has_many :event_respondees,
    through: :event_responses,
    source: :respondee

  accepts_nested_attributes_for :event_responses

end
