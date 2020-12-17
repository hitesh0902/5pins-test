import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import LoopIcon from "@material-ui/icons/Loop";
import IconButton from "@material-ui/core/IconButton";
import { Link as RouterLink } from "react-router-dom";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  date: {
    textDecoration: "none",
    color: "#222",
  },
}));

export default function MeetingSummary(props) {
  const classes = useStyles();

  const { date, id } = props;

  return (
    <Grid
      item
      container
      alignItems="center"
      style={{ borderLeft: "5px solid yellow", paddingLeft: 15 }}
    >
      <Grid item xs={10}>
        <RouterLink to={`/meeting/${id}`} className={classes.date}>
          <Typography variant="body2">{moment(date).format("LLL")}</Typography>
        </RouterLink>
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
