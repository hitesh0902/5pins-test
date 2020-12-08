import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#757ce8",
      main: "#FFFFFF",
      dark: "#002884",
      contrastText: "#000",
    },
    secondary: {
      light: "#ff7961",
      main: "#5061CE",
      dark: "#ba000d",
      contrastText: "#000",
    },
    error: {
      main: "#E40C0C",
    },
    warning: {
      light: "#FFCD54",
      main: "#F4AB00",
    },
    success: {
      main: "#00C527",
    },
    border: {
      light: "#00000029",
      main: "#CDCDCD",
    },
    background: {
      default: "#FBFBFB",
    },
  },
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
