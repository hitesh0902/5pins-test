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
  let data = {};

  if (props.meeting) {
    const { actionItems, notes, talkingPoints } = props.meeting;
    data = { actionItems, notes, talkingPoints };
  }

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
          {data && (
            <React.Fragment>
              <Grid item xs={12}>
                {data.actionItems && (
                  <ActionItems
                    actions={data.actionItems}
                    meetingId={props.id}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                {data.talkingPoints && (
                  <TalkingPoints
                    points={data.talkingPoints}
                    meetingId={props.id}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                {data.notes && (
                  <Notes notes={data.notes} meetingId={props.id} />
                )}
              </Grid>
            </React.Fragment>
          )}
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
    meeting,
  };
};

export default connect(mapStateToProps)(MeetingDetails);
