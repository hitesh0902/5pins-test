import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function ActiveGoals() {
  return (
    <Container maxWidth="xs">
      <Paper style={{ padding: 16 }}>
        <Grid container spacing={2}>
          <Grid item container justify="space-between">
            <Grid item>
              <Typography variant="body1">Active Goals</Typography>
            </Grid>
            <Grid item>
              <AddIcon />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item container>
              <Grid item>
                <FiberManualRecordIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2">Improve vocabulary</Typography>
              </Grid>
              <Grid item>
                <MoreVertIcon />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item>
                <FiberManualRecordIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2">Start networking</Typography>
              </Grid>
              <Grid item>
                <MoreVertIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
