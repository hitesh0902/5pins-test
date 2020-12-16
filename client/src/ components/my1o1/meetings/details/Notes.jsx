import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { openModalAction } from "../../../../actions/modalAction";
import { deleteNote } from "../../../../actions/meetingAction";

function Notes(props) {
  const { notes, open, deleteItem, meetingId } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body1">Notes</Typography>
      </Grid>

      <Grid item container alignItems="center">
        {notes.map((note) => (
          <React.Fragment key={note._id}>
            <Grid item xs={2}>
              <Avatar />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">{`Name - ${note.title}`}</Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => deleteItem({ meetingId, dataId: note._id })}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>

      <Grid item container>
        <Button variant="text" color="secondary" onClick={() => open(2)}>
          Add More
        </Button>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    open: (value) => dispatch(openModalAction(value)),
    deleteItem: (data) => dispatch(deleteNote(data)),
  };
};

export default connect(null, mapDispatchToProps)(Notes);
