const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      // console.log(action.payload.user);
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};

export default authReducer;
