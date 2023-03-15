import React from "react";
import * as Muicon from "@mui/icons-material";

const Icon = ({ name, ...rest }) => {
  const IconComponent = Muicon[name];
  return IconComponent ? <IconComponent {...rest} /> : null;
};

export default Icon;