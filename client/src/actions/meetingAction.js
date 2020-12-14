import axios from "axios";

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
