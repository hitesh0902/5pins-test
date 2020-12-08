import axios from "axios";

// const url = "http://localhost:5000";

export const fetchUserAction = () => async (dispatch) => {
  try {
    const response = await axios.get("/auth/login/success", {
      withCredentials: true,
    });
    const data = await response.data;
    // console.log(response);
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  } catch (err) {
    console.log(err);
  }
};
