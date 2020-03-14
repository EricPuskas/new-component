import React from "react";
import PropTypes from "prop-types";

/**
 * i18n Imports
 */
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { en_ro } from "./COMPONENT_NAME.lang.en-ro";

i18n.addResourceBundle("en_ro", "COMPONENT_NAME", en_ro);

/**
 *  Material UI Imports
 */
import Box from "@material-ui/core/Box";

/**
 * Styles Imports
 */
import { useStyles } from "./COMPONENT_NAME.styles";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const COMPONENT_NAME = props => {
  const { COMPONENT_NAME } = useStyles();
  const { t } = useTranslation("COMPONENT_NAME");

  return <Box className={COMPONENT_NAME}>{t("COMPONENT_NAME")}</Box>;
};

COMPONENT_NAME.propTypes = propTypes;
COMPONENT_NAME.defaultProps = defaultProps;

export default COMPONENT_NAME;
export {
  propTypes as COMPONENT_NAMEPropTypes,
  defaultProps as COMPONENT_NAMEDefaultProps
};
