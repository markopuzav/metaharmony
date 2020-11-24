import React, { Component } from "react";
import ScreenContainer from "../components/ScreenContainer";
import Video from "../components/Video";
import { Row } from "reactstrap";
import { INTRODUCING_MH, ESSENTIALS_1 } from "../constants";

class Videos extends Component {
  render() {
    return (
      <ScreenContainer>
        <div
          className="col align-self-center col-md-8 offset-md-2"
          style={{ marginTop: 20 }}
        >
         {/*
          <h2>Introducing Meta-Harmony</h2>
          <Video youtubeId={INTRODUCING_MH} />
          <Row style={{ paddingBottom: 40 }}></Row>
          */}

          <h2>Essentials 1: Major Chords</h2>
          <Video youtubeId={ESSENTIALS_1} />
        </div>
      </ScreenContainer>
    );
  }
}

export default Videos;
