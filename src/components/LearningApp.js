import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";
import SkillTree from "./SkillTree";

class LearningApp extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ open: true });
    }, 100);
  }

  render() {
    return (
      <Row>
        <Col
          className="align-self-center"
          style={{ marginTop: "-3rem", height: 700 }}
        >
          {/* <SkillTree data={[5, 10, 1, 3]} size={[500, 500]} /> */}
        </Col>
        <Col className="align-self-center" style={{ marginTop: "-3rem" }}>
          <Fade in={this.state.open}>
            <Row>
              <p style={{ fontSize: 90 }}>{"←"}</p>
              <h2 className="text-center">
                {/* Select a node <br /> to start */}
                Comming <br />
                soon
              </h2>
            </Row>
          </Fade>
        </Col>
      </Row>
    );
  }
}

export default LearningApp;
