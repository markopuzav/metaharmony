import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import ScreenContainer from "../ScreenContainer";
import Video from "../Video";
import { ESSENTIALS_2 } from "../../constants";
import { Chord, optimize_voicing } from "../../voicingOptimizer";

const test = function() {
  return optimize_voicing([new Chord([0, 4, 7]), new Chord([2, 6, 9]), new Chord([2, 5, 10]), new Chord([0, 4, 7])], [3, 4, 3], 2, 4);
}

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

        {
          // console.log(test())
        }

        </div>
      </ScreenContainer>
    );
  }
}

export default Essentials2;
