import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LeftSide from "./LeftSide";
import PendinActions from "./PendinActions";
import Meeting from "./Meeting";
import Feedback from "./Feedback";
import ActiveGoals from "./ActiveGoals";

export default function Dashboard() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={4}>
          <LeftSide />
        </Grid>
        <Grid item xs={4}>
          <Grid item>
            <PendinActions />
          </Grid>
          <Grid item style={{ marginTop: 40 }}>
            <Meeting />
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
