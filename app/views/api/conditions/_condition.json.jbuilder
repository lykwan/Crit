json.extract! condition,
              :id,
              :event_response_id,
              :min_num_people

json.friend_conditions do
  json.array! condition.friend_conditions do |cond|
    json.partial! "api/users/user", user: cond.friend
    json.friend_user_id cond.friend_user_id
    json.id cond.id
  end
end
