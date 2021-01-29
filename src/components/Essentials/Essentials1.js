
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import ScreenContainer from "../ScreenContainer";
import Video from "../Video";
import MajorChordChallenge from "../Challenges/MajorChordChallenge";
import { ESSENTIALS_1 } from "../../constants";


class Essentials1 extends Component {
  render() {
    return (
      <ScreenContainer>
        <div
          className="col align-self-center col-md-8 offset-md-2"
          style={{ marginTop: 20 }}
        >
          <h2 className="text-center" style={{marginTop: 30, marginBottom: 30}}>Essentials 1: Major Chords</h2>
          <Video youtubeId={ESSENTIALS_1} />
          
          {/* navigation */}
          <Nav className="justify-content-center">
            <NavLink
              to={process.env.PUBLIC_URL + "/essentials2"}
              exact
              className="nav-link"
            >
              Next: Minor Chords
            </NavLink>
          </Nav>


          {/* Challenge */}
          <h3 className="text-center" style={{marginTop: 60, marginBottom: 30}}>Try it yourself</h3>
          <MajorChordChallenge/>
        </div>
      </ScreenContainer>
    );
  }
}

export default Essentials1;
