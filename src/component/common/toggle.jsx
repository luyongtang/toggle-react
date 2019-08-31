import React from "react";
import { Checkbox } from "semantic-ui-react";

const Toggle = ({ ...rest }) => {
  return <Checkbox toggle {...rest} />;
};

export default Toggle;
