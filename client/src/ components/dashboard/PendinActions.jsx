import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";

export default function PendinActions() {
  return (
    <Container>
      <Paper style={{ padding: 16 }}>
        <Grid container spacing={2}>
          <Grid item container justify="space-between">
            <Grid item>
              <Typography variant="body1">PENDING ACTION ITEMS</Typography>
            </Grid>
            <Grid item>
              <ButtonGroup>
                <Button variant="contained" color="secondary">
                  Self
                </Button>
                <Button variant="contained" color="primary">
                  Manager
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item container>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1">
                  Think about the skills and experience gaps you need to work on
                  for your next role.
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <EditIcon />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1">
                  Identify the data science course you would like to do.
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <EditIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item>
              <Button variant="outlined" color="secondary">
                Completed
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
