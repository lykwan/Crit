# Crit

Heroku link:

## Minimum Viable Product

Crit is a web application that allows event organizers to plan events easily and allows attendees to specify attending conditions, making committing an event less intimidating.
List of features in the app:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest login
- [ ] Events
- [ ] Groups (private)
- [ ] Friends
- [ ] Profiles
- [ ] BONUS: Notifications
- [ ] BONUS: Search for friends
- [ ] BONUS: Public groups
- [ ] Production README

Features:
0. Events
  - Create event (host)
  - Edit event (host)
  - View event
  - Accepting event (attendee)
    - Specify conditions/rules
      - The number of people
      - Based on who's going
    - Choosing time block
  - Destroy event
0. Groups
  - Creating groups
  - Viewing groups
  - Adding/deleting members
  - Making admin
0. Friends
  - Creating friendship
  - Rejecting friendship
  - Viewing mutual friends
  - Accepting friendship
0. Profiles
  - Viewing friends
  - Viewing public groups
  - Viewing mutual friends
  - Add friend button
0. BONUS: Notifications
  - Friends request notifications
  - Events notifications
0. BONUS: Search for friends
0. BONUS: Public groups
  - Joining a group
  - Searching group

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Allow user to upload image - figure out how uploading images work
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Friends (2 days)

**Objective:** Creating Friends, and user Profiles can be viewed - with their friends

- [ ] `Friend` model and `Friendship` join table
- [ ] Fetching friendships
- [ ] Creating friendships
- [ ] Accepting friendships
- [ ] Seed user data for friends
- [ ] Friend search bar

### Phase 3: Groups Model, API, and components (2 days)

**Objective:** Groups can be created, read, edited and destroyed through
the API.

- [ ] `Group` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for groups (`EventsController`)
- [ ] JBuilder views for groups
- Group components and respective Redux loops
  - [ ] `GroupsIndex`
  - [ ] `GroupIndexItem`
  - [ ] `GroupForm`
  - [ ] `GroupDetail`
- Style group components
- [ ] Seed groups

### Phase 4: Events Model, API, and components (3 days)

**Objective:** Events can be created, read, edited and destroyed through
the API.

- [ ] `Event` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for events (`EventsController`)
- [ ] JBuilder views for events
- Event components and respective Redux loops
  - [ ] `EventsIndex`
  - [ ] `EventIndexItem`
  - [ ] `EventForm`
  - [ ] `EventDetail`
- Allow users to accept
- Style events components
- [ ] Seed events

### Phase 6: - Styling (1 day)

**objective:** Making the pages more interactive

- [ ] Hovering buttons
- [ ] Interactive forms through input boxes
- [ ] coloring to indicate hovering
- [ ] make sure everything moves smoothly

### Phase 7: BONUS: Notifications (if I have time)

**objective:** Allow users to see notifications

- [ ] Building friends notifications
- [ ] Building events notifications
- [ ] Notifications container
  - [ ] `NotificationIndex`
  - [ ] `NotificationIndexItem`
- [ ] Testing to see if notifications go through

### Other Bonus Features (TBD)
- [ ] public groups
- [ ] making specifying conditions more complex
