import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";

export default function PendingActionSummary(props) {
  const { item } = props;
  return (
    <React.Fragment>
      <Grid item xs={2}>
        <Checkbox />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">{item.body}</Typography>
      </Grid>
      <Grid item xs={2}>
        <EditIcon />
      </Grid>
    </React.Fragment>
  );
}
