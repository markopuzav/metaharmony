import React, { Component } from "react";
import ScreenContainer from "../components/ScreenContainer";
import Image from "react-bootstrap/Image";

class Team extends Component {
  render() {
    return (
      <ScreenContainer>
        <div className="row justify-content-start">
          <div className="col-lg-2 align-self-center">
            <Image
              src={process.env.PUBLIC_URL + "/people/tom.png"}
              alt="Tom picture"
              style={{ marginBottom: 16, marginLeft: -8 }}
              fluid
            ></Image>
          </div>
          <div className="col align-self-center">
            <h2>Tom Glazebrook</h2>
            <p style={{ paddingLeft: 16 }}>
              <i>Creator of Meta-Harmony</i>
            </p>
          </div>
          <p>
            In the summer of 2015, after completing the harmony modules of my
            music degree, I developed a strong feeling of interconnectivity
            within harmony that I found deeply beautiful. I was utterly
            compelled to find a way of describing this interconnective nature of
            harmony in a way that truly reflected its innate beauty.
          </p>
          <p>
            After years of investigation and with much help from collaborators,
            Meta-Harmony is the result.
          </p>
        </div>
        <hr style={{ paddingBottom: 16 }} />
        <div className="row justify-content-start">
          <div className="col-lg-2 align-self-center">
            <Image
              src={process.env.PUBLIC_URL + "/people/charlie.jpg"}
              alt="Charlie picture"
              style={{ marginBottom: 16, marginLeft: -8 }}
              fluid
            ></Image>
          </div>
          <div className="col align-self-center">
            <h2>Charlie Egan</h2>
            <p style={{ paddingLeft: 16 }}>
              <i>Collaborator</i>
            </p>
          </div>
          <p>
            I've been collaborating with Tom on Meta-Harmony since the summer of
            2017. My main job on the team is to understand the mathematical
            aspects of Meta-Harmony and to investigate ways of understanding and
            interacting with it.
          </p>
          <p>
            It's been such an exciting project for me and has truly opened my
            mind and ears to the underlying structure of musical harmony. As a
            drummer I have always had an emotional understanding of harmony but,
            until recently, had found it very hard to access. Working on
            Meta-Harmony has completely changed my perspective. It manages to
            present a wealth of nuanced information in a very accessible format.
          </p>
          <p>
            The more we work with Meta-Harmony the more we seem to be able to
            mine from it. My favourite moment of the project so far was
            discovering a special rotation in the shapes of Meta-Harmony which
            represents 'negative harmony'.
          </p>
          <p>
            I'm excited for you to explore your own journey through
            Meta-Harmony.
          </p>
        </div>
      </ScreenContainer>
    );
  }
}

export default Team;
