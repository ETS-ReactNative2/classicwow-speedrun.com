import React, { useState } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

import { API_URL } from "config";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import ClassicWowSpeedRunImage from "assets/img/examples/ClassicWowSpeedrun-run-export.jpg";

import useImportFromAddonStyles from "assets/jss/material-kit-react/views/submitRunSections/useImportFromAddonStyles.jsx";

const ImportFromAddonSection = () => {
  const [error, setError] = useState(false);

  const handleImportStringChange = e => {
    const url = `${API_URL}/api/import`;
    console.log(url);
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: `import=${e.target.value}`
    });
  };

  const classes = useImportFromAddonStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Submit your run</h2>
          <img src={ClassicWowSpeedRunImage} className={classes.image} />
          <TextField
            id="speedlevel-import"
            label="Paste WowClassicSpeedrun Addon export here"
            multiline
            fullWidth
            rows="4"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={handleImportStringChange}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default ImportFromAddonSection;
