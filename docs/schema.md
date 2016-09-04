# Schema Information

## users
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
username         | string    | not null, indexed, unique
password_digest  | string    | not null
session_token    | string    | not null, indexed, unique
image_link       | string    | not null
description      | text     | not null

## events
column name             | data type | details
------------------------|-----------|-----------------------
id                      | integer   | not null, primary key
title                   | string    | not null
description             | text      | not null
group_id                | integer   | not null, foreign key (references groups), indexed
creator_user_id         | integer   | not null, foreign key (references users), indexed
location                | text      |
image_link              | string    |
is_attendees_finalized  | boolean   | not null, default: false
start_time              | datetime  |
end_time                | datetime  |

## event_responses
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
event_id             | integer   | not null, foreign key (references events), indexed
attendee_user_id     | integer   | not null, foreign key (references users), indexed
response             | string    | not null

## availability_bitmaps
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
event_response_id    | integer   | not null, foreign key (references event_responses), indexed
date                 | date      | not null
time                 | integer   | not null (limit: 8)


## conditions
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
event_response_id    | integer   | not null, foreign key (references event_responses), indexed, unique
min_num_people       | integer   |

## friend_conditions
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
condition_id         | integer   | not null, foreign key (references conditions), indexed
friend_user_id       | integer   |

## groups
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
title                | string    | not null
description          | text      | not null
is_public            | boolean   | not null

## group_membership
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
group_id             | integer   | not null, foreign key (references groups), indexed
member_user_id       | integer   | not null, foreign key (references users), indexed
is_admin             | boolean   | not null

## friendship
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
requestor_user_id    | integer   | not null, foreign key (references users), indexed
requestee_user_id    | integer   | not null, foreign key (references users), indexed
is_accepted          | boolean   | not null, default: false
