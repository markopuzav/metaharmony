import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import ScreenContainer from "../ScreenContainer";
import Video from "../Video";
import { ESSENTIALS_2 } from "../../constants";

const progression_cost = function(progression, p=12) {
  //    progression: array of n-tuples
  //    p: p norm
  //  ASSUMES THAT THE CHORDS ARE SORTED
  if (progression.length <= 1) return 0;
  var cost = 0;

  const indices = [...Array(progression[0].length).keys()]; // 0, ..., n - 1
  for (var i = 0; i < progression.length - 1; i++) {
    // increase the cost by distance_p(prog[i], prog[i+1])
    cost += Math.pow(indices.map(ii => Math.pow(Math.abs(progression[i + 1][ii] - progression[i][ii]), p)).reduce((a, b) => a + b, 0), 1/p);
  }
  return cost;
}

const optimize_voicing = function(chords, v1, m=10) {
  //    chords: array of n-tuples
  //    v1 = first voicing (note that voiced chord is then: c + 12*v)
  //    m = maximal voicing
  if (chords.length === 0) return [];

  // sort the chords
  chords = chords.map(chord => chord.sort());

  var optimal_cost = Infinity;
  var optimal_voicing = [];
  const recurse_find_optimal = function(cost_so_far=0, voicing_so_far=[v1], chord_index=0) {
    // end of recursion
    if (chord_index === chords.length - 1) { 
      if (cost_so_far < optimal_cost) {
        optimal_cost = cost_so_far;
        optimal_voicing = voicing_so_far;
      }
      return;
    }
    // pruning
    if (cost_so_far >= optimal_cost) {
      return;
    }

    // recurse
    for (var next_v = 0; next_v <= m; next_v++) {
      var next_pair = [
        [...chords[chord_index]].map(x => x + 12*voicing_so_far[voicing_so_far.length - 1]), 
        [...chords[chord_index + 1]].map(x => x + 12*next_v)
      ];

      var next_cost_so_far = cost_so_far + progression_cost(next_pair); // next pair cost
      var next_voicing_so_far = [...voicing_so_far, next_v];
      recurse_find_optimal(next_cost_so_far, next_voicing_so_far, chord_index + 1);
    }
  }

  recurse_find_optimal();
  return [optimal_cost, optimal_voicing];
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
          console.log(optimize_voicing([[11,11,11], [1,1,1], [1,1,1], [11,11,11], [1,1,1], [1,1,1]], 0))
        }

        </div>
      </ScreenContainer>
    );
  }
}

export default Essentials2;
