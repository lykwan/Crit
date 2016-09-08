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

  has_many :conditions,
    through: :event_responses,
    source: :condition

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

  def condition_satisfied?(condi, num_remaining, remaining_potentials)
    # debugger
    if condi.nil?
      return true
    elsif condi.min_num_people && condi.min_num_people > num_remaining
      return false
    end
    condi.specified_friends.all? do |friend|
      remaining_potentials.any? do |response|
        response.respondee_user_id === friend.id
      end
    end
  end

  def eliminate_dependencies(eliminate_hash, eliminate_condition_responses, dependencies_hash)
    if eliminate_condition_responses.length == 0
      return
    end

    eliminate_condition_responses.each do |response|
      # p "response"
      # p response
      if eliminate_hash[response.respondee.id]
        return
      end
      eliminate_hash[response.respondee.id] = response
      # p "eliminate_hash"
      # p eliminate_hash
      eliminate_dependencies(eliminate_hash, dependencies_hash[response], dependencies_hash)
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

    remaining_potentials = potential_respondees_responses
    is_all_satisfied = false
    until is_all_satisfied
      is_all_satisfied = true
      num_remaining = remaining_potentials.length
      eliminate_condition_responses = remaining_potentials.select do |response|
        !condition_satisfied?(response.condition, num_remaining, remaining_potentials)
      end


      if eliminate_condition_responses.length >= 1
        is_all_satisfied = false
      end

      eliminate_dependencies_responses = {}
      eliminate_dependencies(eliminate_dependencies_responses, eliminate_condition_responses, dependencies_hash)

      remaining_potentials = remaining_potentials.select do |response|
        eliminate_dependencies_responses[response.respondee.id].nil?
      end
      # p "remaining_potentials"
      # p remaining_potentials
    end

    return remaining_potentials.map do |response|
      response.respondee
    end


    # self.event_respondees.where(event_responses: { response: "definitely" })

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
