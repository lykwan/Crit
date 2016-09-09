json.extract! event,
              :id,
              :title,
              :description,
              :location,
              :img,
              :is_attendees_finalized,
              :start_date,
              :end_date,
              :is_time_finalized

json.start_date_formatted event.start_date.strftime("%m/%d/%y")
json.end_date_formatted event.end_date.strftime("%m/%d/%y")

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

if event.is_time_finalized
  json.finalized_availabilities do
    json.array! event.finalized_availabilities do |availability|
        json.partial! "api/availabilities/finalized_availability",
                      availability: availability, event_id: event.id
    end
  end
end
