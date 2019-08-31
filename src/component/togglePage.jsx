import React, { Component } from "react";
import Toggle from "./common/toggle";

class TogglePage extends Component {
  render() {
    return (
      <div>
        <h1>Feature Toggle Configuration</h1>
        <Toggle id="switch" label="hello" />
      </div>
    );
  }
}

export default TogglePage;
