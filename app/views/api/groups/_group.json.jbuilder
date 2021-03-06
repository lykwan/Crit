json.extract! group,
              :id,
              :title,
              :description,
              :is_public,
              :img

json.admins do
  json.array! group.admins do |admin|
    json.partial! "api/users/user", user: admin
  end
end

json.regular_members do
  json.array! group.regular_members do |member|
    json.partial! "api/users/user", user: member
  end
end
