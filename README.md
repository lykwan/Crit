# Crit

[Crit live][heroku] **NB:** This should be a link to your production site

[heroku]: https://crit.herokuapp.com/#/?_k=kpu3jx

Crit is a web application that allows event organizers to plan events easily and allows attendees to specify attending conditions, making committing an event less intimidating.
It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

### Single-Page App

Crit is truly a single-page; all content is delivered on one static page.  The root page listens to a `SessionStore` and renders content based on a call to `SessionStore.currentUser()`.  Sensitive information is kept out of the frontend of the app by making an API call to `SessionsController#get_user`.

### groups

Everyone can be invited with a group


### Events

New Events:
Events are made at first by a member in a group, and everyone that is in the group can respond to the events, with "definitely, only if, and definitely not"

![EventPage](docs/screenshots/events_screenshot.png)

only if allows you to pick conditions that you would only want to commit to going to the event if conditions are satisfied.
![OnlyIfPage](doc/screenshots/events_onlyif_screenshot.png)

### Event Time Schedule

After you are one of the finalized attendee, you can pick your availability

![AttendeePage](docs/screenshots/events_schedule_screenshot.png)

### Groups

You can add a group, and edit the content if you are an admin. A event created by a member can be seen by everyone in the group.

![GroupPage](docs/screenshots/groups_screenshot.png)
