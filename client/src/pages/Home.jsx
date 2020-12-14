import React, { useEffect } from "react";
import Navbar from "../ components/navbar/Navbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Info from "../ components/my1o1/info/Info";
import PendingActionList from "../ components/my1o1/pendingactions/PendingActionsList";
import MeetingList from "../ components/my1o1/meetings/MeetingList";
import Feedback from "../ components/my1o1/feedback/Feedback";
import ActiveGoals from "../ components/my1o1/activegoals/ActiveGoals";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getMeetingsAction } from "../actions/meetingAction";

function Home(props) {
  const { getMeetings } = props;

  useEffect(() => {
    getMeetings();
  }, [getMeetings]);

  if (!props.user) return <Redirect to="/login" />;

  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={3}>
            <Info />
          </Grid>

          <Grid item xs={6}>
            <Grid item>
              <PendingActionList />
            </Grid>
            <Grid item style={{ marginTop: 40 }}>
              <MeetingList />
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <Grid item>
              <Feedback />
            </Grid>
            <Grid item style={{ marginTop: 40 }}>
              <ActiveGoals />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMeetings: () => dispatch(getMeetingsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
