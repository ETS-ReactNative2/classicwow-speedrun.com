/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import Typography from '@material-ui/core/Typography';

// @material-ui/icons
import { Apps, DirectionsRun } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderProfileOrLoginButton from "components/HeaderProfileOrLoginButton/HeaderProfileOrLoginButton.jsx";

import useHeaderLinksStyles from "assets/jss/material-kit-react/components/useHeaderLinksStyles.jsx";

export default function RightHeaderLinks({ ...props }) {
  const classes = useHeaderLinksStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to={"/login-page"} className={classes.link}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <DirectionsRun className={classes.icons} /> Submit run
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <HeaderProfileOrLoginButton className={classes.navLink} provider="bnet" />
      </ListItem>
    </List>
  );
}
