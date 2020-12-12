import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import PendingActionSummary from "./PendingActionSummary";

const pendingItems = [
  {
    id: 1,
    body: "Think about the skills and experience gaps you need to work on",
  },
  {
    id: 2,
    body: "Identify the data science course you would like to do next.",
  },
  {
    id: 3,
    body: "what would like to do next.",
  },
  {
    id: 4,
    body: "Do something interesting .",
  },
];

export default function PendinActionList() {
  const [self, setSelf] = useState(true);

  return (
    <Container>
      <Paper style={{ padding: 16 }}>
        <Grid container spacing={2}>
          <Grid item container justify="space-between">
            <Grid item>
              <Typography variant="body1">PENDING ACTION ITEMS</Typography>
            </Grid>
            <Grid item>
              <ButtonGroup>
                <Button
                  variant="contained"
                  color={self ? "secondary" : "primary"}
                  onClick={() => setSelf(true)}
                >
                  Self
                </Button>
                <Button
                  variant="contained"
                  color={self ? "primary" : "secondary"}
                  onClick={() => setSelf(false)}
                >
                  Manager
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>

          <Grid item container>
            {self &&
              pendingItems.map((item) => (
                <Grid item container key={item.id} alignItems="center">
                  <PendingActionSummary item={item} />
                </Grid>
              ))}
          </Grid>
          <Grid item container>
            <Grid item>
              <Button variant="outlined" color="secondary">
                Completed
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
