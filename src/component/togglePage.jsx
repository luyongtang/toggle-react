import React, { Component } from "react";
import Toggle from "./common/toggle";
import { Segment } from "semantic-ui-react";
import ToggleSegment from "./common/toggleSegment";

class TogglePage extends Component {
  render() {
    return (
      <div>
        <h1>Feature Toggle Configuration</h1>
        <ToggleSegment />
      </div>
    );
  }
}

export default TogglePage;
