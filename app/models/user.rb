# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  description     :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: :true }

  after_initialize :ensure_session_token!

  has_many :group_memberships,
    primary_key: :id,
    foreign_key: :member_user_id,
    class_name: :GroupMembership,
    dependent: :destroy

  has_many :groups,
    through: :group_memberships,
    source: :group

  has_many :event_responses,
    primary_key: :id,
    foreign_key: :respondee_user_id,
    class_name: :EventResponse,
    dependent: :destroy

  # Credentials methods

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    password_dig = BCrypt::Password.new(self.password_digest)
    password_dig.is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private
  def generate_session_token
    new_token = SecureRandom.urlsafe_base64
    while User.find_by(session_token: new_token)
      new_token = SecureRandom.urlsafe_base64
    end

    new_token
  end

  def ensure_session_token!
    self.session_token ||= generate_session_token
  end

end
