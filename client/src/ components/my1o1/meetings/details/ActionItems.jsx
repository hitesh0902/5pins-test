import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";

function ActionItems(props) {
  const { open } = props;
  console.log(props);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body1">Action Items</Typography>
      </Grid>

      <Grid item container>
        <Grid item xs={2}>
          <Avatar />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">
            Name - Identify the data science course you would like do
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <EditIcon />
          <DeleteIcon />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Button variant="text" color="secondary" onClick={() => open()}>
          Add More
        </Button>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    open: () => dispatch({ type: "OPEN_MODAL" }),
  };
};

export default connect(null, mapDispatchToProps)(ActionItems);
