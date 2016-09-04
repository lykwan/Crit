json.extract! event,
              :id,
              :title,
              :description,
              :location,
              :img,
              :is_attendees_finalized,
              :start_time,
              :end_time

json.event_respondees do
  json.array! event.event_respondees do |respondee|
    json.partial! "api/users/user", user: respondee
  end
end

json.group do
  json.partial! "api/groups/group", group: event.group
end

json.host do
  json.partial! "api/users/user", user: event.host
end
