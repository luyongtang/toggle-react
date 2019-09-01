import React, { Component } from "react";
import ToggleSegmentsGroup from "./common/toggleSegmentsGroup";

class TogglePage extends Component {
  render() {
    const data = [
      {
        groupId: "Group One",
        features: [
          {
            id: "Feature One",
            enabled: true
          },
          {
            id: "Feature Two",
            enabled: false
          }
        ]
      },
      {
        groupId: "Group Two",
        features: [
          {
            id: "Feature Three",
            enabled: true
          },
          {
            id: "Feature Four",
            enabled: false
          }
        ]
      }
    ];
    return (
      <div className="container">
        <h1>Feature Toggle Configuration</h1>
        <ToggleSegmentsGroup items={data} />
      </div>
    );
  }
}

export default TogglePage;
