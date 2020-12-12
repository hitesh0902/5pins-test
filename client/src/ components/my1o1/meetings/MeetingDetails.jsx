import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import ActionItems from "./details/ActionItems";
import TalkingPoints from "./details/TalkingPoints";
import Notes from "./details/Notes";

export default function MeetingDetails(props) {
  return (
    <Container>
      <Paper style={{ padding: 16 }}>
        <Grid item container spacing={3}>
          <Grid item xs={12}>
            <RouterLink to="/">
              <Button variant="text" color="secondary">
                Go Back
              </Button>
            </RouterLink>
          </Grid>
          <Grid item xs={12}>
            <ActionItems />
          </Grid>
          <Grid item xs={12}>
            <TalkingPoints />
          </Grid>
          <Grid item xs={12}>
            <Notes />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
