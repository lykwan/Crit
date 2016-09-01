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
