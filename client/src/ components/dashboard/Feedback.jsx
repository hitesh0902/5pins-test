import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

export default function Feedback() {
  return (
    <Container>
      <Paper style={{ padding: 16 }}>
        <Grid container spacing={2}>
          <Grid item container>
            <Typography variant="body1">
              HOW HAVE YOU BEEN FEELING AT WORK
            </Typography>
          </Grid>
          <Grid item container justify="center">
            <Grid item xs={3}>
              <EmojiEmotionsIcon />
              <Typography variant="body1">Feeling Low</Typography>
            </Grid>
            <Grid item xs={3}>
              <EmojiEmotionsIcon />
              <Typography variant="body1">Feeling OK</Typography>
            </Grid>
            <Grid item xs={3}>
              <EmojiEmotionsIcon />
              <Typography variant="body1">Feeling Great</Typography>
            </Grid>
          </Grid>
          <hr />
          <Grid item container justify="center">
            <Button variant="outlined">
              <ThumbUpAltIcon />
              <Typography variant="button"> Appreciate Someone</Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
