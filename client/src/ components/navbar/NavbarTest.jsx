import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    // minHeight: 54
  },
  logo: {},
  tabs: {
    minHeight: 62,
  },
  navRight: {
    flexGrow: 0.02,
  },
  profile: {
    marginLeft: 15,
  },
  arrowDown: {
    width: 20,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  //   const { match, history, user } = props;

  const { page, history, user } = props;

  const tabNameToIndex = {
    0: "my1o1",
    1: "myteam",
  };

  const indexToTabName = {
    my1o1: 0,
    myteam: 1,
  };

  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //   if (!props.user) return <Redirect to="/login" />;

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Typography variant="h4" color="secondary" className={classes.logo}>
              5pins
            </Typography>
            <Tabs value={selectedTab} onChange={handleChange}>
              <Tab label="My 1:1s" className={classes.tabs} />
              <Tab label="My Team" className={classes.tabs} />
              <Tab label="Reviews" className={classes.tabs} />
              <Tab label="Insights" className={classes.tabs} />
            </Tabs>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className={classes.navRight}
          >
            <NotificationsNoneOutlinedIcon />
            <Box display="flex" alignItems="center">
              <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
              <Box className={classes.profile}>
                <Box
                  display="flex"
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  <Box>
                    <Typography variant="subtitle2">
                      {/* {user.displayName} */}
                    </Typography>
                    <Typography variant="body2">Profession</Typography>
                  </Box>
                  <ExpandMoreIcon className={classes.arrowDown} />
                </Box>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a href="/auth/logout">Logout</a>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>
        </Box>
      </AppBar>
      <Toolbar style={{ minHeight: 40 }} />
    </div>
  );
}
