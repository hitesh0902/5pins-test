import axios from "axios";

const devUrl = "http://localhost:5000/api";

export const getMeetingsAction = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/meetings");
    const data = await response.data;
    dispatch({
      type: "GET_MEETINGS",
      payload: {
        data,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const addActionItems = (data) => async (dispatch) => {
  try {
    const { meetingId, user, title } = data;
    await axios.post(`${devUrl}/meetings/${meetingId}/action_item`, {
      user,
      title,
    });
    // console.log(data);
    dispatch({ type: "ADD_ACTION_ITEM", payload: { meetingId, user, title } });
  } catch (err) {
    console.log(err);
  }
};

export const addTalkingPoints = (data) => async (dispatch) => {
  try {
    const { meetingId, user, title } = data;
    await axios.post(`${devUrl}/meetings/${meetingId}/talking_point`, {
      user,
      title,
    });
    // console.log(data);
    dispatch({
      type: "ADD_TALKING_POINT",
      payload: { meetingId, user, title },
    });
  } catch (err) {
    console.log(err);
  }
};

export const addNotes = (data) => async (dispatch) => {
  try {
    const { meetingId, user, title } = data;
    await axios.post(`${devUrl}/meetings/${meetingId}/note`, {
      user,
      title,
    });
    // console.log(data);
    dispatch({ type: "ADD_NOTES", payload: { meetingId, user, title } });
  } catch (err) {
    console.log(err);
  }
};

export const deleteActionItem = (data) => async (dispatch) => {
  try {
    const { meetingId, dataId } = data;
    await axios.delete(`${devUrl}/meetings/${meetingId}/action_item/${dataId}`);
    dispatch({ type: "DELETE_ACTION_ITEM", payload: {} });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTalkingPoint = (data) => async (dispatch) => {
  try {
    const { meetingId, dataId } = data;
    await axios.delete(
      `${devUrl}/meetings/${meetingId}/talking_point/${dataId}`
    );
    dispatch({ type: "DELETE_TALKING_POINT", payload: {} });
  } catch (err) {
    console.log(err);
  }
};

export const deleteNote = (data) => async (dispatch) => {
  try {
    const { meetingId, dataId } = data;
    await axios.delete(`${devUrl}/meetings/${meetingId}/note/${dataId}`);
    dispatch({ type: "DELETE_NOTE", payload: {} });
  } catch (err) {
    console.log(err);
  }
};
