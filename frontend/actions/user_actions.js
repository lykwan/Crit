export const UserConstants = {
  FETCH_USER: 'FETCH_USER',
  FETCH_USERS: 'FETCH_USERS',
  RECEIVE_USER: 'RECEIVE_USER',
  RECEIVE_USERS: 'RECEIVE_USERS'
};

const fetchUser = (userId) => ({
  type: UserConstants.FETCH_USER,
  userId
});

const fetchUsers = () => ({
  type: UserConstants.FETCH_USERS
});

const receiveUsers = (users) => ({
  type: UserConstants.RECEIVE_USERS,
  users
});

const receiveUser = user => ({
  type: UserConstants.RECEIVE_USER,
  user
});

export const UserActions = {
  fetchUsers,
  receiveUsers,
  fetchUser,
  receiveUser
};
