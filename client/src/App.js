import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { fetchUserAction } from "./actions/authActions";
import { connect } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App(props) {
  const { getUser } = props;

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Redirect exact from="/home" to="/home/my1o1" />
          <Route exact path="/home/:page?" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(fetchUserAction()),
  };
};

export default connect(null, mapDispatchToProps)(App);
