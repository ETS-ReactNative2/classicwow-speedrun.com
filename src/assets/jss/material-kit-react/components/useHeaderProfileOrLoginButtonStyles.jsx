import { makeStyles } from "@material-ui/core/styles";
import { defaultFont } from "assets/jss/material-kit-react.jsx";

import {
  transition,
  boxShadow,
  drawerWidth
} from "assets/jss/material-kit-react.jsx";

const useHeaderLoginButtonStyles = makeStyles({
  appResponsive: {
    margin: "0px 10px"
  },
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit"
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  listItem: {
    color: "inherit",
    display: "block"
  },
  listItemText: {
    padding: "0 !important"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px"
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: drawerWidth,
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)"
    }
  }
});

export default useHeaderLoginButtonStyles;
