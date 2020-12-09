import React from "react";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import BlockOutlinedIcon from "@material-ui/icons/BlockOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import PeopleIcon from "@material-ui/icons/People";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import NavTabs from "./NavTabs";

const useStyles = makeStyles((theme) => ({
  navLeft: {
    flexGrow: 1,
  },
  logo: {
    fontWeight: 700,
  },
  leftItems: {
    borderLeft: `1px solid ${theme.palette.border.main}`,
    marginLeft: 20,
    flexGrow: 0.15,
  },
  itemSpace: {
    marginRight: 8,
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

  // const { user } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let manager = "yes";

  return (
    <div>
      <AppBar position="static">
        {/* <Toolbar> */}
        <Box display="flex">
          <Box display="flex" alignItems="center" className={classes.navLeft}>
            <Typography variant="h4" color="secondary" className={classes.logo}>
              5pins
            </Typography>
            <NavTabs />
            {/* <Box
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              className={classes.leftItems}
            >
              <Box display="flex" alignItems="center">
                <ListAltOutlinedIcon className={classes.itemSpace} />
                <Typography variant="subtitle1">My 1.1s</Typography>
              </Box>
              {manager && (
                <Box display="flex" alignItems="center">
                  <PeopleIcon className={classes.itemSpace} />
                  <Typography variant="subtitle1">My 1.1s</Typography>
                </Box>
              )}
              <Box display="flex" alignItems="center">
                <RateReviewOutlinedIcon className={classes.itemSpace} />
                <Typography variant="subtitle1">Reviews</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <BlockOutlinedIcon className={classes.itemSpace} />
                <Typography variant="subtitle1">Insights</Typography>
              </Box>
            </Box> */}
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
                      Name
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
        {/* </Toolbar> */}
      </AppBar>
      <Toolbar style={{ minHeight: 40 }} />
    </div>
  );
}
