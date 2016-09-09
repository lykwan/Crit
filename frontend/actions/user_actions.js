export const UserConstants = {
  FETCH_USER: 'FETCH_USER',
  FETCH_USERS: 'FETCH_USERS',
  UPDATE_USER: 'UPDATE_USER',
  RECEIVE_USER: 'RECEIVE_USER',
  RECEIVE_USERS: 'RECEIVE_USERS'
};

const fetchUser = (userId) => ({
  type: UserConstants.FETCH_USER,
  userId
});

const fetchUsers = (query) => ({
  type: UserConstants.FETCH_USERS,
  query
});

const receiveUsers = (users) => ({
  type: UserConstants.RECEIVE_USERS,
  users
});

const receiveUser = user => ({
  type: UserConstants.RECEIVE_USER,
  user
});

const updateUser = (userId, user) => ({
  type: UserConstants.UPDATE_USER,
  userId,
  user
});

export const UserActions = {
  fetchUsers,
  receiveUsers,
  fetchUser,
  receiveUser,
  updateUser
};
