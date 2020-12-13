import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { openModal } from "../../../../actions/modalAction";

function ActionItems(props) {
  const { open } = props;
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
        <Button variant="text" color="secondary" onClick={() => open(1)}>
          Add More
        </Button>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    open: (value) => dispatch(openModal(value)),
  };
};

export default connect(null, mapDispatchToProps)(ActionItems);
