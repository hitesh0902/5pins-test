import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Info from "./info/Info";
import PendinActions from "./pendingactions/PendinActions";
import MeetingList from "./meetings/MeetingList";
import Feedback from "./feedback/Feedback";
import ActiveGoals from "./activegoals/ActiveGoals";

export default function My101() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={4}>
          <Info />
        </Grid>
        <Grid item xs={4}>
          <Grid item>
            <PendinActions />
          </Grid>
          <Grid item style={{ marginTop: 40 }}>
            <MeetingList />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item>
            <Feedback />
          </Grid>
          <Grid item style={{ margin: 40 }}>
            <ActiveGoals />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
