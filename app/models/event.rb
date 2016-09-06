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
#  start_time             :datetime
#  end_time               :datetime
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

  def finalized_attendees
    # potential_respondees_responses =
    #   self.event_responses.includes(:respondee, condition: {friend_conditions: :friend})
    #                       .where(response: ["definitely", "only if"])
    # dependencies_hash = Hash.new { |h, k| h[k] = [] }
    # potential_respondees_responses.each do |response|
    #   if response.condition
    #     response.condition.specified_friends.each do |depended_friend|
    #       dependencies_hash[depended_friend] << response
    #     end
    #   end
    # end
    #
    # remaining_potentials = pontential_respondees_responses
    # is_all_satisfied = false
    # until is_all_satisfied
    #   is_all_satisified = true
    #   eliminate_responses = remaining_potentials.filter do |response|
    #     !condition_satisfied(response.condition)
    #   end
    #   eliminate_responses.each do |response|
    #     is_all_satisfied = false
    #     if (dependencies_hash[response.respondee]) {
    #
    #     }

    self.event_respondees.where(event_responses: { response: "definitely" })

  end

end
