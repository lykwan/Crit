# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_link      | string    | not null
description      | text     | not null

## events
column name          | data type | details 
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
title                | string    | not null
description          | text      | not null
group_id             | integer   | not null, foreign key (references groups), indexed
host_id              | integer   | not null, foreign key (references users), indexed
location             | text      |
image_link           | string    |
attendees_confirmed  | boolean   | not null, default: false
time_confirmed       | boolean   | not null

## event_attends
column name          | data type | details 
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
event_id             | integer   | not null, foreign key (references events), indexed
attendee_id          | integer   | not null, foreign key (references users), indexed
response             | string    | not null
time_block           | time      | not null

## conditions
column name          | data type | details 
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
event_attend_id      | integer   | not null, foreign key (references event_attends), indexed
num_people           | integer   |
friend_ids           | integer   | not null, foreign key (references users), indexed

## groups
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
title                | string    | not null
description          | text      | not null
creator_id           | integer   | not null, foreign key (references users), indexed
is_public            | boolean   | not null

## group_membership
column name          | data type | details 
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
group_id             | integer   | not null, foreign key (references groups), indexed
member_id            | integer   | not null, foreign key (references users), indexed
is_admin             | boolean   | not null

## friendship
column name          | data type | details 
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
requestor_id         | integer   | not null, foreign key (references users), indexed
requestee_id         | integer   | not null, foreign key (references users), indexed
is_accepted          | boolean   | not null, default: false
