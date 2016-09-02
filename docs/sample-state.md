```json
{
  currentUser: {
    id: 1,
    username: "lily-kwan"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createEvent: {errors: ["property can't be blank"]}
    createGroup: {errors: ["property can't be blank"]}
  },
  events: {
    1: {
      title: "Sample State",
      description: "is useful to plan",
      group_id: 1,
      host_id: 1
      location: "blank",
      image_link: "blank",
      attendees_confirmed: true,
      time_confirmed: false
    }
  },
  groups: {
    groups: [],
    groupDetail: {
      id: 1
      title: "blah",
      creator_id: 1,
      description: "is cool"
      is_public: false
    },
    errors: []
  },

  users: {
    1: {
      username: "blah",
      image_link: 1,
      description: "is cool"
      friends: {
        1: {
          requestor_id: '1',
          requestee_id: '2'
        }
      }
    }
  }
}
```
