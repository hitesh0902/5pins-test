import React from "react";
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

const meetings = [
  {
    id: 1,
    date: "10 Dec 2020 at 11 AM",
    status: false,
    user: "Person1",
    talkingPoints: [{ id: 1, point: "Do some talking" }],
    pendingActionItems: [{ id: 1, action: "Do some action" }],
    notes: [{ id: 1, desc: "Write some notes" }],
  },
  {
    id: 2,
    date: "12 Dec 2020 at 11 AM",
    status: false,
    user: "Person2",
    talkingPoints: [{ id: 2, point: "Do some talking" }],
    pendingActionItems: [{ id: 2, action: "Do some action" }],
    notes: [{ id: 2, desc: "Write some notes" }],
  },
  {
    id: 3,
    date: "14 Dec 2020 at 11 AM",
    status: false,
    user: "Person3",
    talkingPoints: [{ id: 3, point: "Do some talking" }],
    pendingActionItems: [{ id: 3, action: "Do some action" }],
    notes: [{ id: 3, desc: "Write some notes" }],
  },
  {
    id: 4,
    date: "16 Dec 2020 at 11 AM",
    status: true,
    user: "Person4",
    talkingPoints: [{ id: 4, point: "Do some talking" }],
    pendingActionItems: [{ id: 4, action: "Do some action" }],
    notes: [{ id: 4, desc: "Write some notes" }],
  },
];

function Home(props) {
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
              <MeetingList meetings={meetings} />
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

export default connect(mapStateToProps)(Home);
