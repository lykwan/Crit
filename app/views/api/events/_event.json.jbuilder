json.extract! event,
              :id,
              :title,
              :description,
              :group,
              :host,
              :location,
              :img,
              :is_attendees_finalized,
              :is_time_finalized

json.event_respondees do
  json.array! event.event_respondees do |respondee|
    json.partial! "api/users/user", user: respondee
  end
end
