## Component Heirarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Topbar
  - AuthForm
  - AppDescription

**Navbar**
  - Tabs
  - SearchFriends (SearchResultsContainer)
  - Notifications

**SearchResultsContainer**
  - props: searchResults, onSearch
  - Search

**EventsPage**
  - EventIndex
  - NewEventButton

**EventIndexContainer**
  - props: events, fetchEvents
  - EventIndex
    + EventIndexItem
      * EventDetail

**NewEventFormContainer**
  - props: createEvent
  - NewEventForm

**EventContainer**
  - props: event
  - EventDetail
  - AttendeeList
  - ChooseTimeForm
  - SpecifyConditionForm

**GroupsPage**
  - GroupIndex
  - SearchGroup (SearchResultsContainer)
  - NewGroupButton

**GroupIndexContainer**
  - props: groups, fetchGroups
  - GroupIndex
    + GroupIndexItem
      * GroupDetail

**NewGroupFormContainer**
  - props: createGroup
  - NewGroupForm

**GroupContainer**
  - props: group
  - GroupDetail
  - AdminList
  - MemberList
  - AddMemberButton
  - EditButton

**Profile**
  - props: user
  - UserDetail
  - FriendsDetail
  - GroupsDetail

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/events" | "EventsPage" | (EventIndexContainer as index)
| "/event/:eventId" | "EventContainer" |
| "/event/new" | "NewEventContainer" |
| "/groups" | "GroupsPage" | (GroupIndexContainer as index)
| "/groups/:groupId" | "GroupContainer" |
| "/groups/new" | "NewGroupContainer" |
| "/user/:userId" | "Profile" |
