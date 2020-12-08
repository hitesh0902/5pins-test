import React from "react";
import Navbar from "../ components/navbar/Navbar";
import Dashboard from "../ components/dashboard/Dashboard";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Home(props) {
  if (!props.user) return <Redirect to="/login" />;

  return (
    <div>
      <Navbar user={props.user} />
      <Dashboard />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Home);
