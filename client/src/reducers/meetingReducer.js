const initialState = [];

function meetingReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MEETINGS":
      return action.payload.data;
    // case "ADD_ACTION_ITEMS":
    // return state;
    // case "ADD_TALKING_POINTS":
    // return state;
    // case "ADD_NOTES":
    //   console.log(action);
    //   const newState = [...state];
    //   const docIndex = newState.findIndex(
    //     (doc) => doc._id === action.payload.meetingId
    //   );
    //   newState[docIndex].actionItems.push
    //   console.log(docIndex);
    default:
      return state;
  }
}

export default meetingReducer;
