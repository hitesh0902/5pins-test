import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link as RouterLink } from "react-router-dom";
import MeetingSummary from "./MeetingSummary";

export default function MeetingList(props) {
  const { meetings } = props;

  const [current, setCurrent] = useState(true);

  return (
    <Container>
      <div style={{ padding: 16 }}>
        <Grid container spacing={2}>
          <Grid item container justify="center">
            <Grid item>
              <ButtonGroup>
                <Button
                  variant="contained"
                  color={current ? "secondary" : "primary"}
                  onClick={() => setCurrent(true)}
                >
                  Upcoming 1:1s
                </Button>
                <Button
                  variant="contained"
                  color={current ? "primary" : "secondary"}
                  onClick={() => setCurrent(false)}
                >
                  Past 1:1s
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>

          <Grid item container>
            {current &&
              meetings.map((meeting) => (
                <Paper
                  style={{
                    width: "100%",
                    marginBottom: 10,
                    cursor: "pointer",
                    // key={meeting.id}
                  }}
                >
                  <RouterLink to={`/meeting/${meeting.id}`}>
                    <MeetingSummary meeting={meeting} />
                  </RouterLink>
                </Paper>
              ))}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
