import React, { Component } from "react";
import ScreenContainer from "../components/ScreenContainer";
import Video from "../components/Video";
import MajorChordChallenge from "../components/MajorChordChallenge";
import { ESSENTIALS_1 } from "../constants";

class Videos extends Component {
  render() {
    return (
      <ScreenContainer>
        <div
          className="col align-self-center col-md-8 offset-md-2"
          style={{ marginTop: 20 }}
        >
          <h2 className="text-center" style={{marginTop: 30, marginBottom: 10}}>Essentials 1: Major Chords</h2>
          <Video youtubeId={ESSENTIALS_1} />
          <h3 className="text-center" style={{marginTop: 30}}>Try it yourself</h3>
          <MajorChordChallenge/>
        </div>
      </ScreenContainer>
    );
  }
}

export default Videos;
