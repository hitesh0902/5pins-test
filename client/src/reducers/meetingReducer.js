const initialState = [];

function meetingReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MEETINGS":
      return action.payload.data;
    default:
      return state;
  }
}

export default meetingReducer;
