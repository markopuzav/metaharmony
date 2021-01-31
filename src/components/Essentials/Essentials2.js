import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import ScreenContainer from "../ScreenContainer";
import Video from "../Video";
import { ESSENTIALS_2 } from "../../constants";
import MinorChordChallenge from "../Challenges/MinorChordChallenge";

class Essentials2 extends Component {
  render() {
    return (
      <ScreenContainer>
        <div
          className="col align-self-center col-md-8 offset-md-2"
          style={{ marginTop: 20 }}
        >
          <h2 className="text-center" style={{marginTop: 30, marginBottom: 30}}>Essentials 2: Minor Chords</h2>
          <Video youtubeId={ESSENTIALS_2} />

        {/* navigation */}
          <Nav className="justify-content-center">
            <NavLink
              to={process.env.PUBLIC_URL + "/essentials1"}
              exact
              className="nav-link"
            >
              Previous: Major Chords
            </NavLink>
          </Nav>

        <h3 className="text-center" style={{marginTop: 60, marginBottom: 30}}>Try it yourself</h3>
        <MinorChordChallenge/>
        </div>
      </ScreenContainer>
    );
  }
}

export default Essentials2;
