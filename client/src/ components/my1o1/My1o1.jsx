import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Info from "./info/Info";
import PendingActionList from "./pendingactions/PendingActionsList";
import MeetingList from "./meetings/MeetingList";
import Feedback from "./feedback/Feedback";
import ActiveGoals from "./activegoals/ActiveGoals";
import MeetingDetails from "./meetings/MeetingDetails";

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

export default function My101() {
  const [id, setId] = React.useState(0);

  return (
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
  );
}
