json.array! @availabilities do |availability|
  json.partial! "api/availabilities/availability",
                availability: availability
end
