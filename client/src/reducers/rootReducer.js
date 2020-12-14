import { combineReducers } from "redux";
import authReducer from "./authReducer";
import meetingReducer from "./meetingReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  meetings: meetingReducer,
});

export default rootReducer;
