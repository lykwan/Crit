export const UserConstants = {
  FETCH_USER: 'FETCH_USER',
  RECEIVE_USER: 'RECEIVE_USER'
};

const fetchUser = (userId) => ({
  type: UserConstants.FETCH_USER,
  userId
});

const receiveUser = user => ({
  type: UserConstants.RECEIVE_USER,
  user
});

export const UserActions = {
  fetchUser,
  receiveUser
};
