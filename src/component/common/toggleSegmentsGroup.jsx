import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import ToggleSegments from "./toggleSegments";

class ToggleSegmentsGroup extends Component {
  renderToggleSegments = data => (
    <Segment.Group>
      <ToggleSegments data={data} />
    </Segment.Group>
  );
  render() {
    const { items: groups } = this.props;
    return (
      <Segment.Group>
        {groups.map(g => {
          return (
            <React.Fragment>
              <Segment>{g.groupId}</Segment>
              {this.renderToggleSegments(g.features)}
            </React.Fragment>
          );
        })}
      </Segment.Group>
    );
  }
}

export default ToggleSegmentsGroup;
