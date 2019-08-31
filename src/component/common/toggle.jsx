import React from "react";
import { Checkbox, Segment } from "semantic-ui-react";

const Toggle = ({ ...rest }) => {
  return <Checkbox toggle {...rest} />;
};

export default Toggle;
