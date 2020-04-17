/**
 *  Material UI Imports
 */
import { makeStyles } from "@material-ui/core";

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  COMPONENT_NAME: {
    border: "1px solid",
    padding: "0.5rem",
    margin: "0.5rem",
    backgroundColor: theme.palette.common.white
  }
}));

export { useStyles };
