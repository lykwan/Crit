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

  validates :title, :description, :group_id, :host_user_id,
            :start_date, :end_date, presence: true
  validate :event_in_future, :end_date_after_start, :valid_time_range

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

  def event_in_future
    if self.start_date && self.start_date <= Time.now
      self.errors[:start_date] << "has to be in the future"
    end
  end

  def end_date_after_start
    if self.start_date && self.end_date && self.start_date > self.end_date
      self.errors[:end_date] << "has to be after start_date"
    end
  end

  def valid_time_range
    if self.start_date && self.end_date &&
        (self.end_date.to_date - self.start_date.to_date).to_i > 14
      self.errors[:end_date] << "can only be within two weeks from start date"
    end
  end

  def finalized_attendees
    potential_respondees_responses =
      self.event_responses.includes(:respondee, condition: {friend_conditions: :friend})
                          .where(response: ["definitely", "only if"])
    dependencies_hash = Hash.new { |h, k| h[k] = [] }
    potential_respondees_responses.each do |response|
      if response.condition
        response.condition.specified_friends.each do |depended_friend|
          dependencies_hash[depended_friend] << response
        end
      end
    end

    p dependencies_hash

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

  def finalized_availabilities
    sql_str = <<-SQL
      SELECT availabilities.date, BIT_AND(availabilities.time_slot_bitmap) AS final_availability
      FROM availabilities
      WHERE availabilities.event_id = #{self.id}
      GROUP BY availabilities.date
    SQL

    Availability.find_by_sql(sql_str)
  end

end
