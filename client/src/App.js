import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { fetchUserAction } from "./actions/authActions";
import { connect } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyTeam from "./pages/MyTeam";
import My1o1Details from "./pages/My1o1Details";
import Popup from "./popup/Popup";

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
          <Route path="/meeting/:id" component={My1o1Details} />
          <Route exact path="/myteam" component={MyTeam} />
          <Route exact path="/login" component={Login} />
          <Route path="/" render={() => <h1>Error 404</h1>} />
        </Switch>
        <Popup />
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
