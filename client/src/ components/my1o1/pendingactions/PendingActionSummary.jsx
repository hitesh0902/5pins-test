import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";
import Iconbutton from "@material-ui/core/IconButton";

export default function PendingActionSummary(props) {
  const { item } = props;
  return (
    <React.Fragment>
      <Grid item xs={2}>
        <Checkbox />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body1">{item.body}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Iconbutton>
          <EditIcon />
        </Iconbutton>
      </Grid>
    </React.Fragment>
  );
}
