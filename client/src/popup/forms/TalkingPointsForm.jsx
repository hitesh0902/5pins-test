import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { addTalkingPoints } from "../../actions/meetingAction";

function TalkingPointsForm(props) {
  const { id, addTalkingPoint, currentUserId } = props;

  const [talkingPoint, setTalkingPoint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (talkingPoint.length) {
      addTalkingPoint({
        meetingId: id,
        user: currentUserId,
        title: talkingPoint,
      });
      setTalkingPoint("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={10}>
          <TextField
            label="Enter Point Here"
            variant="outlined"
            fullWidth={true}
            value={talkingPoint}
            onChange={(e) => setTalkingPoint(e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <EditIcon />
        </Grid>
        <Grid item xs={1}>
          <DeleteIcon />
        </Grid>
        <Grid item xs={12}>
          <Button variant="text" color="secondary">
            Add More Points
          </Button>
        </Grid>
        <Grid item container justify="flex-end">
          <Grid item>
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.user._id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTalkingPoint: (data) => dispatch(addTalkingPoints(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TalkingPointsForm);
