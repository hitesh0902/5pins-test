import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function PopupForm(props) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (e, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <Tabs value={currentTab} onChange={handleChange}>
        <Tab label="Talking Points" />
        <Tab label="Action Items" />
        <Tab label="Add Notes" />
      </Tabs>
    </div>
  );
}
