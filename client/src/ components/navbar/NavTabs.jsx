import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link as RouterLink } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs(props) {
  // console.log(props);

  const tabNameToIndex = {
    0: "my1o1",
    1: "myteam",
  };

  const indexToTabName = {
    my1o1: 0,
    myteam: 1,
  };

  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        variant="standard"
        value={selectedTab}
        onChange={handleChange}
        aria-label="nav-tabs "
      >
        <Tab component={RouterLink} label="My 1:1s" to="/" {...a11yProps(0)} />
        <Tab
          component={RouterLink}
          label="My Team"
          to="/myteam"
          {...a11yProps(1)}
        />
        <Tab
          component={RouterLink}
          label="Reviews"
          to="/reviews"
          {...a11yProps(2)}
        />
        <Tab
          component={RouterLink}
          label="Insights"
          to="/insights"
          {...a11yProps(3)}
        />
        {/* <LinkTab label="My 1:1s" href="/" {...a11yProps(0)} />
        <LinkTab label="My Team" href="/myteam" {...a11yProps(1)} />
        <LinkTab label="Reviews" href="/reviews" {...a11yProps(2)} />
        <LinkTab label="Insights" href="/insights" {...a11yProps(2)} /> */}
      </Tabs>
    </div>
  );
}
