import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { addActionItems } from "../../actions/meetingAction";
import { connect } from "react-redux";
import { closeModalAction } from "../../actions/modalAction";

function ActionItemsForm(props) {
  const { id, addAction, currentUserId, close } = props;

  const [action, setAction] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action.length) {
      addAction({ meetingId: id, user: currentUserId, title: action });
      setAction("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={10}>
          <TextField
            label="Enter Action Here"
            variant="outlined"
            fullWidth={true}
            value={action}
            onChange={(e) => setAction(e.target.value)}
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
            Add More Actions
          </Button>
        </Grid>
        <Grid item container justify="flex-end">
          <Grid item>
            <Button variant="contained" color="secondary" onClick={close}>
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              style={{ marginLeft: 10 }}
            >
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
    addAction: (data) => dispatch(addActionItems(data)),
    close: () => dispatch(closeModalAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionItemsForm);
