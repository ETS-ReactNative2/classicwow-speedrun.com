import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";
import { API_URL } from "../../config";
import UserContext from "../../UserContext";
import ProfileButton from "./ProfileButton.jsx";
import LoginButton from "./LoginButton.jsx";

const socket = io(API_URL, {
  autoConnect: false
});

export default function HeaderProfileOrLoginButton(props) {
  const [disabled, setDisabled] = useState(false);
  const { updateUser } = useContext(UserContext);

  const checkPopup = popup => {
    const check = setInterval(() => {
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check);
        setDisabled(false);
      }
    }, 1000);
  };

  const openBlankPopup = () => {
    const width = 600,
      height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const newWindow = window.open(
      "about:blank",
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    );

    return newWindow;
  };

  const connectSocketAndSetPopupLocation = popup => {
    const { provider } = props;
    socket.connect();
    // wait for socket to be connected to be sure that socket.id is available
    socket.on("connect", () => {
      // wait for popup to be opened because sometimes it won't be in time
      const checkPopup = window.setInterval(() => {
        if (popup && !popup.closed) {
          // we need to do it this way because when we would try to open a new window inside this callback
          // it would be blocked by popup blocker. As workaround we change the location of the blank popup here
          const url = `${API_URL}/auth/${provider}?socketId=${socket.id}`;
          popup.location.href = url;
          clearInterval(checkPopup);
        }
      }, 50);
    });
  };

  const startAuth = () => {
    const { provider } = props;
    let popup = null;

    if (!disabled) {
      popup = openBlankPopup();
      connectSocketAndSetPopupLocation(popup);
      checkPopup(popup);
      setDisabled(true);

      socket.on(provider, user => {
        popup.close();
        updateUser(user);
        socket.close();
      });
    }
  };

  const handleLogout = () => {
    fetch(`${API_URL}/auth/logout`, { credentials: "include" })
      .then(response => response.json())
      .then(user => updateUser(user));
  };

  const { provider } = props;

  return (
    <UserContext.Consumer>
      {context => (
        <React.Fragment>
          {context.user.status === "loggedIn" && (
            <ProfileButton logout={handleLogout} username={context.user.name} />
          )}
          {context.user.status === "loggedOut" && (
            <LoginButton
              auth={startAuth}
              provider={provider}
              disabled={disabled}
            />
          )}
        </React.Fragment>
      )}
    </UserContext.Consumer>
  );
}

HeaderProfileOrLoginButton.propTypes = {
  provider: PropTypes.string.isRequired
};
