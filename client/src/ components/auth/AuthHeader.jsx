import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 30,
    paddingBottom: 130,
    backgroundColor: "rgba(0,0,255,0.5)",
    color: "white",
  },
  left: {
    marginRight: 20,
    paddingRight: 20,
    borderRight: "2px solid white",
  },
  right: {
    "& > *": {
      fontWeight: 400,
    },
  },
}));

export default function AuthHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box className={classes.left}>
            <Typography variant="h3">5pins</Typography>
          </Box>
          <Box className={classes.right}>
            <Typography variant="body1">Continuous Performance</Typography>
            <Typography variant="body1">Management</Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
