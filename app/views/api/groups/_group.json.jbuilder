json.extract! group,
              :id,
              :title,
              :description,
              :is_public

json.admins do
  json.array! group.admins do |admin|
    json.partial! "api/users/user", user: admin
  end
end

json.members do
  json.array! group.members do |member|
    json.partial! "api/users/user", user: member
  end
end
