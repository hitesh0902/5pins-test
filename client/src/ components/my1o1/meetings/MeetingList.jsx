import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import EditIcon from "@material-ui/icons/Edit";
import LoopIcon from "@material-ui/icons/Loop";

const meetings = [
  { id: 1, date: "10 Dec 2020 at 11 AM", status: false },
  { id: 2, date: "10 Dec 2020 at 11 AM", status: false },
  { id: 3, date: "10 Dec 2020 at 11 AM", status: false },
  { id: 4, date: "10 Dec 2020 at 11 AM", status: true },
];

export default function MeetingList() {
  return (
    <Container>
      <div style={{ padding: 16 }}>
        <Grid container spacing={2}>
          <Grid item container justify="center">
            <Grid item>
              <ButtonGroup>
                <Button variant="contained" color="secondary">
                  Upcoming 1:1s
                </Button>
                <Button variant="contained" color="primary">
                  Past 1:1s
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>

          <Grid item container>
            <Paper style={{ width: "100%", marginBottom: 10 }}>
              <Grid item container>
                <Grid item xs={10}>
                  <Typography variant="body2">Today at 6 PM</Typography>
                </Grid>
                <Grid item xs={1}>
                  <LoopIcon />
                </Grid>
                <Grid item xs={1}>
                  <EditIcon />
                </Grid>
              </Grid>
            </Paper>

            <Paper style={{ width: "100%", marginBottom: 10 }}>
              <Grid item container>
                <Grid item xs={10}>
                  <Typography variant="body2">Today at 6 PM</Typography>
                </Grid>
                <Grid item xs={1}>
                  <LoopIcon />
                </Grid>
                <Grid item xs={1}>
                  <EditIcon />
                </Grid>
              </Grid>
            </Paper>

            <Paper style={{ width: "100%", marginBottom: 10 }}>
              <Grid item container>
                <Grid item xs={10}>
                  <Typography variant="body2">Today at 6 PM</Typography>
                </Grid>
                <Grid item xs={1}>
                  <LoopIcon />
                </Grid>
                <Grid item xs={1}>
                  <EditIcon />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
