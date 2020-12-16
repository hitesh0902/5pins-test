import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { openModalAction } from "../../../../actions/modalAction";
import { deleteActionItem } from "../../../../actions/meetingAction";

function ActionItems(props) {
  const { actions, open, deleteItem, meetingId } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body1">Action Items</Typography>
      </Grid>

      <Grid item container alignItems="center">
        {actions.map((action) => (
          <React.Fragment key={action._id}>
            <Grid item xs={2}>
              <Avatar />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">
                {`Name - ${action.title}`}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => deleteItem({ meetingId, dataId: action._id })}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </React.Fragment>
        ))}
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
    open: (value) => dispatch(openModalAction(value)),
    deleteItem: (data) => dispatch(deleteActionItem(data)),
  };
};

export default connect(null, mapDispatchToProps)(ActionItems);
