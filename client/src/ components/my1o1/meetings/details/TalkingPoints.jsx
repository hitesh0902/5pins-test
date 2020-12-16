import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { openModalAction } from "../../../../actions/modalAction";
import { deleteTalkingPoint } from "../../../../actions/meetingAction";

function TalkingPoints(props) {
  const { points, open, deleteItem, meetingId } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body1">Talking Points</Typography>
      </Grid>

      <Grid item container alignItems="center">
        {points.map((point) => (
          <React.Fragment key={point._id}>
            <Grid item xs={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={1}>
              <Avatar />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">{`Name - ${point.title}`}</Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => deleteItem({ meetingId, dataId: point._id })}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>

      <Grid item container justify="space-between">
        <Grid item>
          <Button variant="text" color="secondary" onClick={() => open(0)}>
            Add More
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    open: (value) => dispatch(openModalAction(value)),
    deleteItem: (data) => dispatch(deleteTalkingPoint(data)),
  };
};

export default connect(null, mapDispatchToProps)(TalkingPoints);
