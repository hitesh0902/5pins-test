import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "../ components/navbar/Navbar";
import Info from "../ components/my1o1/info/Info";
import Feedback from "../ components/my1o1/feedback/Feedback";
import ActiveGoals from "../ components/my1o1/activegoals/ActiveGoals";
import MeetingDetails from "../ components/my1o1/meetings/MeetingDetails";

function My1o1Details(props) {
  const id = props.match.params.id;
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={3}>
            <Info />
          </Grid>

          <Grid item xs={6}>
            <MeetingDetails id={id} />
          </Grid>

          <Grid item xs={3}>
            <Grid item>
              <Feedback />
            </Grid>
            <Grid item style={{ marginTop: 40 }}>
              <ActiveGoals />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default My1o1Details;
