import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";

export default function LeftSide() {
  return (
    <Container maxWidth="xs">
      <Paper style={{ padding: 16 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1">My Manager</Typography>
          </Grid>
          <Grid item container justify="center">
            <Grid item xs={2}>
              <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">Name</Typography>
              <Typography variant="body1">Job title</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Last Meeting</Typography>
          </Grid>
          <Grid item container>
            <Grid item container>
              <Grid item xs={2}>
                <CheckCircleIcon />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1">Today at 11 AM</Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={2}>
                <ErrorIcon />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1">Not submitted yet!</Typography>
              </Grid>
              <Grid item xs={2}>
                <Button variant="text" size="small" color="secondary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <img src="/img/meet" alt="meet" />
          </Grid>
          <Grid item container justify="center">
            <Button variant="contained" color="secondary">
              Schedule 1:1
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}