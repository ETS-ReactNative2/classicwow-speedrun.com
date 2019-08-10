import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button.jsx";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import useHeaderProfileOrLoginButtonStyles from "assets/jss/material-kit-react/components/useHeaderProfileOrLoginButtonStyles.jsx";

const ProfileButton = props => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const classes = useHeaderProfileOrLoginButtonStyles();

  return (
    <React.Fragment>
      <div className="card">
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={handleDrawerToggle}
        >
          <AccountCircle className={classes.icons} /> {props.username}
        </Button>
      </div>
      <Drawer
        variant="temporary"
        anchor={"right"}
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper
        }}
        onClose={handleDrawerToggle}
      >
        <IconButton onClick={handleDrawerToggle}>
          <CancelIcon />
        </IconButton>
        <div className={classes.appResponsive}>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Typography>{props.username}</Typography>
            </ListItem>
            <Divider />
            <ListItem className={classes.listItem} button>
              <Typography>Show Profile</Typography>
            </ListItem>
            <ListItem
              className={classes.listItem}
              button
              onClick={props.logout}
            >
              <Typography>Logout</Typography>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default ProfileButton;

ProfileButton.propTypes = {
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};
