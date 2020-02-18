const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        jwt: action.payload.token,
        email: action.payload.email
      };
    case USER_CREATED:
      return {
        ...state,
        userCreated: true
      };
    default:
      return state;
  }
};
