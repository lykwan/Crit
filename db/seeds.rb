lily = User.create!(username: 'lily', password: 'password')
tim = User.create!(username: 'tim', password: 'password')
kelly = User.create!(username: 'kelly', password: 'password')
amy = User.create!(username: 'amy', password: 'password')
littletimmy = User.create!(username: 'littletimmy', password: 'password')
cow = User.create!(username: 'cow', password: 'password')
corgi = User.create!(username: 'corgi', password: 'password')

kwan_family = Group.create!(title: 'kwan family', description: 'the coolest')
koh_household = Group.create!(title: 'koh household', description: 'the hottest')
pet_world = Group.create!(title: 'pet world', description: 'the cutest')

GroupMembership.create!(member_user_id: 1, group_id: 1, is_admin: true)
GroupMembership.create!(member_user_id: 3, group_id: 1, is_admin: false)
GroupMembership.create!(member_user_id: 4, group_id: 1, is_admin: false)

GroupMembership.create!(member_user_id: 1, group_id: 2, is_admin: false)
GroupMembership.create!(member_user_id: 2, group_id: 2, is_admin: true)
GroupMembership.create!(member_user_id: 5, group_id: 2, is_admin: false)
GroupMembership.create!(member_user_id: 6, group_id: 2, is_admin: true)

GroupMembership.create!(member_user_id: 6, group_id: 3, is_admin: false)
GroupMembership.create!(member_user_id: 7, group_id: 3, is_admin: true)
