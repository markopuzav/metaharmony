import React, { Component } from "react";
import ScreenContainer from "../components/ScreenContainer";
import Video from "../components/Video";
import { Row } from "reactstrap";
import { COLORS_VIDEO, USING_VIDEO } from "../constants";

class Videos extends Component {
  render() {
    return (
      <ScreenContainer>
        <div
          className="col align-self-center col-md-8 offset-md-2"
          style={{ marginTop: 20 }}
        >
          <h2>Colours</h2>
          <Video youtubeId={COLORS_VIDEO} />
          <Row style={{ paddingBottom: 40 }}></Row>

          <h2>Using</h2>
          <Video youtubeId={USING_VIDEO} />
        </div>
      </ScreenContainer>
    );
  }
}

export default Videos;
