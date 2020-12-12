import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function Notes() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body1">Notes</Typography>
      </Grid>
      <Grid item container>
        <Grid item xs={2}>
          <Avatar />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">
            Name - Identify the data science course you would like do
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <EditIcon />
          <DeleteIcon />
        </Grid>
      </Grid>
      <Grid item container>
        <Button variant="text" color="secondary">
          Add More
        </Button>
      </Grid>
    </Grid>
  );
}
