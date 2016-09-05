# == Schema Information
#
# Table name: event_responses
#
#  id                :integer          not null, primary key
#  event_id          :integer          not null
#  respondee_user_id :integer          not null
#  response          :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class EventResponse < ActiveRecord::Base

  validates :event, :respondee_user_id, :response, null: false
  validates :response, inclusion: { in: ["definitely",
                                         "only if",
                                         "definitely not"
                                        ]}
  validates :event_id, uniqueness: { scope: :respondee_user_id,
                                     message: "User already made a response" }

  belongs_to :event

  belongs_to :respondee,
    primary_key: :id,
    foreign_key: :respondee_user_id,
    class_name: :User

  has_one :condition, dependent: :destroy

  has_many :availability_bitmaps,
    dependent: :destroy,
    inverse_of: :event_response

end
