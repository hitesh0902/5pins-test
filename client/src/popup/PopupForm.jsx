import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function PopupForm(props) {
  const { tabValue } = props;

  const [currentTab, setCurrentTab] = useState(tabValue);

  const handleChange = (e, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        style={{ marginBottom: 25 }}
      >
        <Tab label="Talking Points" />
        <Tab label="Action Items" />
        <Tab label="Add Notes" />
      </Tabs>
      {currentTab === 0 && <TalkingPointsForm />}
      {currentTab === 1 && <ActionItemsForm />}
      {currentTab === 2 && <NotesForm />}
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" color="secondary">
          Cancel
        </Button>
        <Button variant="contained" color="secondary">
          Save
        </Button>
      </Box>
    </div>
  );
}

function TalkingPointsForm() {
  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={10}>
          <TextField
            label="Enter Point Here"
            variant="standard"
            fullWidth="true"
          />
        </Grid>
        <Grid item xs={1}>
          <EditIcon />
        </Grid>
        <Grid item xs={1}>
          <DeleteIcon />
        </Grid>
        <Grid item xs={12}>
          <Button variant="text" color="secondary">
            Add More Points
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
function ActionItemsForm() {
  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={10}>
          <TextField
            label="Enter Action Here"
            variant="standard"
            fullWidth="true"
          />
        </Grid>
        <Grid item xs={1}>
          <EditIcon />
        </Grid>
        <Grid item xs={1}>
          <DeleteIcon />
        </Grid>
        <Grid item xs={12}>
          <Button variant="text" color="secondary">
            Add More Actions
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
function NotesForm() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Add Notes Here"
            variant="standard"
            fullWidth="true"
          />
        </Grid>
      </Grid>
    </div>
  );
}
