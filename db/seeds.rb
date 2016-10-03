guest = User.create!(username: 'guest', password: 'password', name: 'Guest')
tim = User.create!(username: 'tim', password: 'password', name: 'Tim Koh')
kelly = User.create!(username: 'kelly', password: 'password', name: 'Katherine Kwon')
amy = User.create!(username: 'annie', password: 'password', name: 'Annie Kwon')
littletimmy = User.create!(username: 'littletimmy', password: 'password', name: 'Timmy Chan')
cow = User.create!(username: 'cow', password: 'password', name: 'Mimi Lu')
corgi = User.create!(username: 'corgi', password: 'password', name: 'Sisi Su')
katie = User.create!(username: 'katie', password: 'password', name: 'Katie Kwon')
dad = User.create!(username: 'dad', password: 'password', name: 'Ted Kwon')
whatever = User.create!(username: 'whatever', password: 'password', name: 'Cindy Kwon')

profile_pics = ["https://res.cloudinary.com/dsj48uswp/image/upload/w_250,h_250,c_fill/v1473187206/zlsk7n0ya1kgffbgtzis.jpg",
 "https://res.cloudinary.com/dsj48uswp/image/upload/w_250,h_250,c_fill/v1473187194/en09mfxdszzqhk5744mw.jpg",
 "https://res.cloudinary.com/dsj48uswp/image/upload/w_250,h_250,c_fill/v1473388735/guy4_l3vtfq.jpg",
 "https://res.cloudinary.com/dsj48uswp/image/upload/w_250,h_250,c_fill/v1473388734/girl4_kmpheo.jpg",
 "https://res.cloudinary.com/dsj48uswp/image/upload/w_250,h_250,c_fill/v1473388736/guy1_ijlfyq.jpg",
 "https://res.cloudinary.com/dsj48uswp/image/upload/w_250,h_250,c_fill/v1473388735/guy2_qjnuhh.png",
 "https://res.cloudinary.com/dsj48uswp/image/upload/w_250,h_250,c_fill/v1473388735/girl5_akhsvl.jpg",
 "https://res.cloudinary.com/dsj48uswp/image/upload/w_250,h_250,c_fill/v1473388735/girl3_oui7h0.jpg",
 "https://res.cloudinary.com/dsj48uswp/image/upload/w_250,h_250,c_fill/v1473388734/guy3_mk2qfd.jpg",
 "https://res.cloudinary.com/dsj48uswp/image/upload/w_250,h_250,c_fill/v1473388735/girl2_mxekxf.jpg"]

# 10.times do
#   User.create!(username: Faker::Name.first_name + Fake::Name.last_name,
#                 name: Faker::Name.first_name + ' ' + Fake::Name.last_name,
#                 img: profile_pics[0 + rand(10)],
#                 password: Faker::Lorem.characters(10))
# end


kwon_family = Group.create!(title: 'Kwon Family', description: 'People with the coolest last name', img: 'http://s3.amazonaws.com/etntmedia/media/images/ext/543627202/happy-people-friends.jpg')
coolest_group = Group.create!(title: 'The Coolest Group', description: 'Where all the cool people hang out', img: 'http://first-vet.bg/en/wp-content/uploads/sites/2/2014/09/hd-wallpapers-pictures-cats-cute-cat-wallpaper-1366x768-wallpaper.jpg')
corgi_group = Group.create!(title: 'People who loves corgi', description: 'All the corgi owners united!!')

GroupMembership.create!(member_user_id: 1, group_id: 1, is_admin: true)
GroupMembership.create!(member_user_id: 3, group_id: 1, is_admin: false)
GroupMembership.create!(member_user_id: 4, group_id: 1, is_admin: false)
GroupMembership.create!(member_user_id: 8, group_id: 1, is_admin: false)
GroupMembership.create!(member_user_id: 9, group_id: 1, is_admin: false)
GroupMembership.create!(member_user_id: 10, group_id: 1, is_admin: false)

GroupMembership.create!(member_user_id: 1, group_id: 2, is_admin: false)
GroupMembership.create!(member_user_id: 2, group_id: 2, is_admin: true)
GroupMembership.create!(member_user_id: 5, group_id: 2, is_admin: false)
GroupMembership.create!(member_user_id: 6, group_id: 2, is_admin: true)

GroupMembership.create!(member_user_id: 6, group_id: 3, is_admin: false)
GroupMembership.create!(member_user_id: 1, group_id: 3, is_admin: false)
GroupMembership.create!(member_user_id: 7, group_id: 3, is_admin: true)

10.times do |i|
  GroupMembership.create!(member_user_id: 10 + i, group_id: 2 + rand(2), is_admin: false)
end

# guest can close poll
Event.create!(title: 'dinner', description: 'yummy food', group_id: 1, host_user_id: 1, start_date: DateTime.new(2017,10,5), end_date: DateTime.new(2017,10,12), img: 'http://comptonbusinessjournal.com/wp-content/uploads/2015/11/Compton-Community-Thanksgiving-Dinner.jpg')
# guest can set conditions
Event.create!(title: 'lunch', description: 'yummy food again', group_id: 2, host_user_id: 2, start_date: DateTime.new(2017,11,6), end_date: DateTime.new(2017,11,8), img: 'http://comptonbusinessjournal.com/wp-content/uploads/2015/11/Compton-Community-Thanksgiving-Dinner.jpg')
# guest can see finalized attendees but not going
Event.create!(title: 'bowling', description: 'fun times', group_id: 2, host_user_id: 5, start_date: DateTime.new(2017,11,12), end_date: DateTime.new(2017,11,17), img: 'https://img.grouponcdn.com/deal/3hceAZoWHgJXqSoYMnrp/5L-2048x1229/v1/c700x420.jpg', is_attendees_finalized: true)
# guest can see finalized attendees and going
Event.create!(is_attendees_finalized: true, title: 'play with dogs', description: 'corgi day', group_id: 1, host_user_id: 3, start_date: DateTime.new(2017,12,5), end_date: DateTime.new(2017,12,8))
# guest can see finalized attendees and close poll
Event.create!(is_attendees_finalized: true, title: 'hopping to bars', description: 'yaas turnt', group_id: 1, host_user_id: 1, start_date: DateTime.new(2017,10,13), end_date: DateTime.new(2017,10,20), img: 'http://www.delkwoodgrill.net/wp-content/uploads/2016/01/SetWidth1700-Kempinski-Hotel-Bristol-Berlin-Gastronomie-Bristol-Bar.jpg')
# guest can see finalized availibities
Event.create!(is_attendees_finalized: true, is_time_finalized: true, title: 'do fun things!', description: 'doing fun things', group_id: 3, host_user_id: 6, start_date: DateTime.new(2017,11,2), end_date: DateTime.new(2017,11,15), img: 'http://cdn.phillymag.com/wp-content/uploads/2015/01/friends.jpg')
# guest can set conditions
Event.create!(title: 'hiking', description: "who doesn't like hiking??", group_id: 3, host_user_id: 7, start_date: DateTime.new(2017,11,2), end_date: DateTime.new(2017,11,14), img: 'https://techgradeindia.files.wordpress.com/2016/06/hiking.jpg')

EventResponse.create!(event_id: 1, respondee_user_id: 1, response: 'definitely')
EventResponse.create!(event_id: 1, respondee_user_id: 3, response: 'only if')
EventResponse.create!(event_id: 1, respondee_user_id: 4, response: 'only if')
EventResponse.create!(event_id: 1, respondee_user_id: 8, response: 'definitely')

EventResponse.create!(event_id: 2, respondee_user_id: 2, response: 'definitely')
EventResponse.create!(event_id: 2, respondee_user_id: 1, response: 'definitely not')

EventResponse.create!(event_id: 3, respondee_user_id: 5, response: 'definitely')
EventResponse.create!(event_id: 3, respondee_user_id: 2, response: 'definitely')
EventResponse.create!(event_id: 3, respondee_user_id: 6, response: 'definitely')

EventResponse.create!(event_id: 4, respondee_user_id: 1, response: 'definitely')
EventResponse.create!(event_id: 4, respondee_user_id: 3, response: 'definitely')
EventResponse.create!(event_id: 4, respondee_user_id: 4, response: 'definitely')
EventResponse.create!(event_id: 4, respondee_user_id: 8, response: 'definitely')
EventResponse.create!(event_id: 4, respondee_user_id: 9, response: 'definitely')
EventResponse.create!(event_id: 4, respondee_user_id: 10, response: 'definitely')

EventResponse.create!(event_id: 5, respondee_user_id: 1, response: 'definitely')
EventResponse.create!(event_id: 5, respondee_user_id: 3, response: 'definitely')
EventResponse.create!(event_id: 5, respondee_user_id: 4, response: 'definitely')
EventResponse.create!(event_id: 5, respondee_user_id: 8, response: 'definitely')
EventResponse.create!(event_id: 5, respondee_user_id: 9, response: 'definitely')
EventResponse.create!(event_id: 5, respondee_user_id: 10, response: 'definitely')

EventResponse.create!(event_id: 6, respondee_user_id: 6, response: 'definitely')
EventResponse.create!(event_id: 6, respondee_user_id: 1, response: 'definitely')
EventResponse.create!(event_id: 6, respondee_user_id: 7, response: 'definitely')

Condition.create!(event_response_id: 2,
                  min_num_people: 3,
                  friend_conditions_attributes: [{ friend_user_id: 1},
                                                 { friend_user_id: 4}]
                 )
Condition.create!(event_response_id: 3, min_num_people: 4)

Availability.create!(event_id: 5, user_id: 1, date: DateTime.new(2017,10,13), time_slot_bitmap: 255)
Availability.create!(event_id: 5, user_id: 1, date: DateTime.new(2017,10,14), time_slot_bitmap: 255)
Availability.create!(event_id: 5, user_id: 1, date: DateTime.new(2017,10,15), time_slot_bitmap: 255)
Availability.create!(event_id: 5, user_id: 1, date: DateTime.new(2017,10,16), time_slot_bitmap: 0)
Availability.create!(event_id: 5, user_id: 1, date: DateTime.new(2017,10,17), time_slot_bitmap: 0)
Availability.create!(event_id: 5, user_id: 1, date: DateTime.new(2017,10,18), time_slot_bitmap: 0)
Availability.create!(event_id: 5, user_id: 1, date: DateTime.new(2017,10,19), time_slot_bitmap: 0)
Availability.create!(event_id: 5, user_id: 1, date: DateTime.new(2017,10,20), time_slot_bitmap: 0)

Availability.create!(event_id: 5, user_id: 3, date: DateTime.new(2017,10,13), time_slot_bitmap: 0)
Availability.create!(event_id: 5, user_id: 3, date: DateTime.new(2017,10,14), time_slot_bitmap: 255)
Availability.create!(event_id: 5, user_id: 3, date: DateTime.new(2017,10,15), time_slot_bitmap: 255)
Availability.create!(event_id: 5, user_id: 3, date: DateTime.new(2017,10,16), time_slot_bitmap: 255)
Availability.create!(event_id: 5, user_id: 3, date: DateTime.new(2017,10,17), time_slot_bitmap: 0)
Availability.create!(event_id: 5, user_id: 3, date: DateTime.new(2017,10,18), time_slot_bitmap: 0)
Availability.create!(event_id: 5, user_id: 3, date: DateTime.new(2017,10,19), time_slot_bitmap: 0)
Availability.create!(event_id: 5, user_id: 3, date: DateTime.new(2017,10,20), time_slot_bitmap: 0)

Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,2), time_slot_bitmap: 24435)
Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,3), time_slot_bitmap: 2235)
Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,4), time_slot_bitmap: 0)
Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,5), time_slot_bitmap: 2343)
Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,6), time_slot_bitmap: 0)
Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,7), time_slot_bitmap: 46533)
Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,8), time_slot_bitmap: 0)
Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,9), time_slot_bitmap: 0)
Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,10), time_slot_bitmap: 0)
Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,11), time_slot_bitmap: 0)
Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,12), time_slot_bitmap: 0)
Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,13), time_slot_bitmap: 0)
Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,14), time_slot_bitmap: 0)
Availability.create!(event_id: 6, user_id: 6, date: DateTime.new(2017,11,15), time_slot_bitmap: 0)
