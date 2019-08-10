import { makeStyles } from "@material-ui/core/styles";
import { title } from "assets/jss/material-kit-react.jsx";

const useImportFromAddonStyles = makeStyles({
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  }
});

export default useImportFromAddonStyles;
