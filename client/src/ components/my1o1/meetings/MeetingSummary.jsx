import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import LoopIcon from "@material-ui/icons/Loop";
import IconButton from "@material-ui/core/IconButton";

export default function MeetingSummary(props) {
  const { date } = props;

  return (
    <Grid item container>
      <Grid item xs={10}>
        <Typography variant="body2">{date}</Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <LoopIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
