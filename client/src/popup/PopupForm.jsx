import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TalkingPointsForm from "./forms/TalkingPointsForm";
import ActionItemsForm from "./forms/ActionItemsForm";
import NotesForm from "./forms/NotesForm";

function PopupForm(props) {
  const { id, tabValue } = props;

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
      {currentTab === 0 && <TalkingPointsForm id={id} />}
      {currentTab === 1 && <ActionItemsForm id={id} />}
      {currentTab === 2 && <NotesForm id={id} />}
    </div>
  );
}

export default PopupForm;
