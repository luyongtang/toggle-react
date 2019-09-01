import React from "react";
import Toggle from "./toggle";
import { Segment } from "semantic-ui-react";

const ToggleSegments = ({ data }) => {
  return data.map(f => {
    return (
      <Segment>
        <Toggle id={f.id} label={f.id} checked={f.enabled} />
      </Segment>
    );
  });
};

export default ToggleSegments;
