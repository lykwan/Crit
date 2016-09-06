lily = User.create!(username: 'lily', password: 'password', name: 'Lily', img: 'https://s-media-cache-ak0.pinimg.com/236x/39/51/66/395166785942e7f4098fb27b5dc8b3d2.jpg')
tim = User.create!(username: 'tim', password: 'password', name: 'Tim', img: 'https://s-media-cache-ak0.pinimg.com/236x/39/51/66/395166785942e7f4098fb27b5dc8b3d2.jpg')
kelly = User.create!(username: 'kelly', password: 'password', name: 'Kelly', img: 'https://s-media-cache-ak0.pinimg.com/236x/39/51/66/395166785942e7f4098fb27b5dc8b3d2.jpg')
amy = User.create!(username: 'amy', password: 'password', name: 'Amy', img: 'https://s-media-cache-ak0.pinimg.com/236x/39/51/66/395166785942e7f4098fb27b5dc8b3d2.jpg')
littletimmy = User.create!(username: 'littletimmy', password: 'password', name: 'Little Timmy', img: 'https://s-media-cache-ak0.pinimg.com/236x/39/51/66/395166785942e7f4098fb27b5dc8b3d2.jpg')
cow = User.create!(username: 'cow', password: 'password', name: 'Cow', img: 'https://s-media-cache-ak0.pinimg.com/236x/39/51/66/395166785942e7f4098fb27b5dc8b3d2.jpg')
corgi = User.create!(username: 'corgi', password: 'password', name: 'Corgi', img: 'https://s-media-cache-ak0.pinimg.com/236x/39/51/66/395166785942e7f4098fb27b5dc8b3d2.jpg')

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

Event.create!(title: 'dinner', description: 'yummy food', group_id: 1, host_user_id: 1, start_date: DateTime.new(2016,10,5).strftime("%Y-%m-%d"), end_date: DateTime.new(2016,10,12).strftime("%Y-%m-%d"))
Event.create!(title: 'lunch', description: 'yummy food again', group_id: 2, host_user_id: 2)
Event.create!(title: 'bowling', description: 'fun times', group_id: 2, host_user_id: 5)
Event.create!(title: 'play with dogs', description: 'corgi day', group_id: 1, host_user_id: 3)
Event.create!(title: 'girls night out', description: 'yaas turnt', group_id: 1, host_user_id: 1)
Event.create!(title: 'destroy human things', description: 'evil af pets', group_id: 3, host_user_id: 6)

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

Availability.create!(event_id: 1, user_id: 1, date: DateTime.new(2016,9,5).strftime("%Y-%m-%d"), time_slot_bitmap: 255)
