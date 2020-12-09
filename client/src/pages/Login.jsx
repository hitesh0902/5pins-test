import React from "react";
import AuthHeader from "../ components/auth/AuthHeader";
import AuthBox from "../ components/auth/AuthBox";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function Login(props) {
  const { user } = props;

  if (user) return <Redirect to="/home" />;

  return (
    <div>
      <AuthHeader />
      <AuthBox />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Login);
