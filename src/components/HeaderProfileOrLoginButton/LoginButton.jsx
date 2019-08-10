import React from "react";
import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button.jsx";
import useHeaderProfileOrLoginButtonStyles from "assets/jss/material-kit-react/components/useHeaderProfileOrLoginButtonStyles.jsx";

const LoginButton = props => {
  const classes = useHeaderProfileOrLoginButtonStyles();

  return (
    <Button
      disabled={props.disabled}
      onClick={props.auth}
      color={props.provider}
      round
    >
      <i className={classes.socialIcons + " fab fa-battle-net"} /> Login
    </Button>
  );
};

export default LoginButton;

LoginButton.propTypes = {
  auth: PropTypes.func.isRequired,
  provider: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};
