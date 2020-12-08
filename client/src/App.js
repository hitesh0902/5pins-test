import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { fetchUserAction } from "./actions/authActions";
import { connect } from "react-redux";

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
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
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
