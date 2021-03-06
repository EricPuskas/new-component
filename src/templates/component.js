import React from "react";
import PropTypes from "prop-types";

/**
 * Imports i18n
 */
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { LANG_LANG } from "./COMPONENT_NAME.lang.LANG-LANG";

/**
 * Imports the component styles
 */
import { useStyles } from "./COMPONENT_NAME.styles";

/**
 * Defines the prop types
 */
const propTypes = {
  componentName: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  componentName: "COMPONENT_NAME",
};

/**
 * Displays the component
 */
const COMPONENT_NAME = (props) => {
  const { componentName } = props;

  /**
   * Handles the translations
   */
  i18n.addResourceBundle("lang_lang", "COMPONENT_NAME", LANG_LANG);
  const { t } = useTranslation("COMPONENT_NAME");

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return <div className={classes.root}>{t(componentName)}</div>;
};

COMPONENT_NAME.propTypes = propTypes;
COMPONENT_NAME.defaultProps = defaultProps;

export default COMPONENT_NAME;
export {
  propTypes as COMPONENT_NAMEPropTypes,
  defaultProps as COMPONENT_NAMEDefaultProps,
};
