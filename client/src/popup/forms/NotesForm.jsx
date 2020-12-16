import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addNotes } from "../../actions/meetingAction";

function NotesForm(props) {
  const { id, addNote, currentUserId } = props;

  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.length) {
      addNote({ meetingId: id, user: currentUserId, title: note });
      setNote("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Add Notes Here"
            variant="outlined"
            fullWidth={true}
            multiline={true}
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <Grid item container justify="flex-end" style={{ marginTop: 20 }}>
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
    addNote: (data) => dispatch(addNotes(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesForm);
