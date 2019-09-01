import React from "react";
import Toggle from "./toggle";
import { Segment } from "semantic-ui-react";

const ToggleSegment = () => {
  return (
    <Segment>
      <Toggle id="switch" label="feature1" />
    </Segment>
  );
};

export default ToggleSegment;
