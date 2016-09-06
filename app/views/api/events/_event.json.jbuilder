json.extract! event,
              :id,
              :title,
              :description,
              :location,
              :img,
              :is_attendees_finalized,
              :start_date,
              :end_date

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

if event.is_attendees_finalized
  json.finalized_attendees do
    event.finalized_attendees.each do |attendee|
      json.set! attendee.id do
        json.partial! "api/users/user", user: attendee
      end
    end
  end
end
