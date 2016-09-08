lily = User.create!(username: 'lily', password: 'password', name: 'Lily')
tim = User.create!(username: 'tim', password: 'password', name: 'Tim')
kelly = User.create!(username: 'kelly', password: 'password', name: 'Kelly')
amy = User.create!(username: 'amy', password: 'password', name: 'Amy')
littletimmy = User.create!(username: 'littletimmy', password: 'password', name: 'Little Timmy')
cow = User.create!(username: 'cow', password: 'password', name: 'Cow')
corgi = User.create!(username: 'corgi', password: 'password', name: 'Corgi')
katie = User.create!(username: 'katie', password: 'password', name: 'Katie')
dad = User.create!(username: 'dad', password: 'password', name: 'Dad')

kwan_family = Group.create!(title: 'kwan family', description: 'the coolest')
koh_household = Group.create!(title: 'koh household', description: 'the hottest')
pet_world = Group.create!(title: 'pet world', description: 'the cutest')

GroupMembership.create!(member_user_id: 1, group_id: 1, is_admin: true)
GroupMembership.create!(member_user_id: 3, group_id: 1, is_admin: false)
GroupMembership.create!(member_user_id: 4, group_id: 1, is_admin: false)
GroupMembership.create!(member_user_id: 8, group_id: 1, is_admin: false)
GroupMembership.create!(member_user_id: 9, group_id: 1, is_admin: false)

GroupMembership.create!(member_user_id: 1, group_id: 2, is_admin: false)
GroupMembership.create!(member_user_id: 2, group_id: 2, is_admin: true)
GroupMembership.create!(member_user_id: 5, group_id: 2, is_admin: false)
GroupMembership.create!(member_user_id: 6, group_id: 2, is_admin: true)

GroupMembership.create!(member_user_id: 6, group_id: 3, is_admin: false)
GroupMembership.create!(member_user_id: 7, group_id: 3, is_admin: true)

# DateTime.new(2016,10,12).strftime("%Y-%m-%d")

Event.create!(title: 'dinner', description: 'yummy food', group_id: 1, host_user_id: 1, start_date: DateTime.new(2016,10,5), end_date: DateTime.new(2016,10,12))
Event.create!(title: 'lunch', description: 'yummy food again', group_id: 2, host_user_id: 2, start_date: DateTime.new(2016,11,6), end_date: DateTime.new(2016,11,8))
Event.create!(title: 'bowling', description: 'fun times', group_id: 2, host_user_id: 5, start_date: DateTime.new(2016,11,12), end_date: DateTime.new(2016,11,17))
Event.create!(title: 'play with dogs', description: 'corgi day', group_id: 1, host_user_id: 3, start_date: DateTime.new(2016,12,5), end_date: DateTime.new(2016,12,8))
Event.create!(title: 'girls night out', description: 'yaas turnt', group_id: 1, host_user_id: 1, start_date: DateTime.new(2016,10,13), end_date: DateTime.new(2016,10,20))
Event.create!(title: 'destroy human things', description: 'evil af pets', group_id: 3, host_user_id: 6, start_date: DateTime.new(2016,11,2), end_date: DateTime.new(2016,11,15))

EventResponse.create!(event_id: 1, respondee_user_id: 1, response: 'definitely')
EventResponse.create!(event_id: 1, respondee_user_id: 3, response: 'only if')
EventResponse.create!(event_id: 1, respondee_user_id: 4, response: 'only if')
EventResponse.create!(event_id: 2, respondee_user_id: 2, response: 'definitely')
EventResponse.create!(event_id: 2, respondee_user_id: 1, response: 'definitely not')
EventResponse.create!(event_id: 3, respondee_user_id: 5, response: 'definitely')
EventResponse.create!(event_id: 4, respondee_user_id: 3, response: 'definitely')
EventResponse.create!(event_id: 5, respondee_user_id: 1, response: 'definitely')
EventResponse.create!(event_id: 6, respondee_user_id: 6, response: 'definitely')

Condition.create!(event_response_id: 2,
                  min_num_people: 3,
                  friend_conditions_attributes: [{ friend_user_id: 1},
                                                 { friend_user_id: 4}]
                 )
Condition.create!(event_response_id: 3, min_num_people: 4)

Availability.create!(event_id: 1, user_id: 1, date: DateTime.new(2016,10,5), time_slot_bitmap: 255)
