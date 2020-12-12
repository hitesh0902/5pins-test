import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "../ components/navbar/Navbar";
import Info from "../ components/my1o1/info/Info";
import Feedback from "../ components/my1o1/feedback/Feedback";
import ActiveGoals from "../ components/my1o1/activegoals/ActiveGoals";
import MeetingDetails from "../ components/my1o1/meetings/MeetingDetails";

const meetings = [
  {
    id: 1,
    date: "10 Dec 2020 at 11 AM",
    status: false,
    user: "Person1",
    talkingPoints: [{ id: 1, point: "Do some talking" }],
    ActionItems: [{ id: 1, action: "Do some action" }],
    notes: [{ id: 1, desc: "Write some notes" }],
  },
  {
    id: 2,
    date: "12 Dec 2020 at 11 AM",
    status: false,
    user: "Person2",
    talkingPoints: [{ id: 2, point: "Do some talking" }],
    ActionItems: [{ id: 2, action: "Do some action" }],
    notes: [{ id: 2, desc: "Write some notes" }],
  },
  {
    id: 3,
    date: "14 Dec 2020 at 11 AM",
    status: false,
    user: "Person3",
    talkingPoints: [{ id: 3, point: "Do some talking" }],
    ActionItems: [{ id: 3, action: "Do some action" }],
    notes: [{ id: 3, desc: "Write some notes" }],
  },
  {
    id: 4,
    date: "16 Dec 2020 at 11 AM",
    status: true,
    user: "Person4",
    talkingPoints: [{ id: 4, point: "Do some talking" }],
    ActionItems: [{ id: 4, action: "Do some action" }],
    notes: [{ id: 4, desc: "Write some notes" }],
  },
];

function My1o1Details(props) {
  // console.log(props);
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={3}>
            <Info />
          </Grid>

          <Grid item xs={6}>
            <MeetingDetails />
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

export default My1o1Details;
