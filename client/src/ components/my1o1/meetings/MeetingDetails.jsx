import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import ActionItems from "./details/ActionItems";
import TalkingPoints from "./details/TalkingPoints";
import Notes from "./details/Notes";
import { connect } from "react-redux";

function MeetingDetails(props) {
  const {
    details: { actionItems, notes, talkingPoints },
  } = props;

  // console.log(details);

  return (
    <Container>
      <Paper style={{ padding: 16 }}>
        <Grid item container spacing={3}>
          <Grid item xs={12}>
            <RouterLink to="/">
              <Button variant="text" color="secondary">
                Go Back
              </Button>
            </RouterLink>
          </Grid>
          <Grid item xs={12}>
            <ActionItems actions={actionItems} />
          </Grid>
          <Grid item xs={12}>
            <TalkingPoints points={talkingPoints} />
          </Grid>
          <Grid item xs={12}>
            <Notes notes={notes} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  const meeting = state.meetings.find((meeting) => meeting._id === id);
  return {
    currentUser: state.auth.user,
    details: meeting.details,
  };
};

export default connect(mapStateToProps)(MeetingDetails);
