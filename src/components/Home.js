import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { Row } from "reactstrap";
import ScreenContainer from "../components/ScreenContainer";
import Fade from "react-bootstrap/Fade";

class Home extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ open: true });
    }, 0);
  }

  render() {
    return (
      <ScreenContainer>
        <Fade in={this.state.open}>
          <Row style={{ minHeight: "100%" }}>
            <div className="col align-self-center offset-md-1">
              <Row style={{ paddingBottom: 160, marginLeft: 20 }}>
                <h2>
                  A new approach <br /> to musical harmony
                </h2>
              </Row>
            </div>
            <div className="col">
              <Image
                src={process.env.PUBLIC_URL + "/images/new-approach-image.jpg"}
                alt="Meta-Harmony Example"
                style={{ paddingRight: 16 }}
                fluid
              ></Image>
            </div>
          </Row>
        </Fade>

        <Fade in={this.state.open}>
          <Row>
            <div
              className="col align-self-center col-md-8 offset-md-2"
              style={{ marginTop: 20 }}
            >
              <p className="text-center">
                Meta-Harmony works by labelling notes and chords with{" "}
                <strong>colour</strong> <i>(see above)</i> then building{" "}
                <strong>shapes</strong> with these colours <i>(see below)</i>.{" "}
              </p>

              <p className="text-center">
                The mixing and moving of these colours and shapes allows for{" "}
                <strong>clarity</strong> and <strong>creativity</strong> with
                harmony.
              </p>
            </div>
          </Row>
        </Fade>

        <Fade in={this.state.open}>
          <Row>
            <div
              className="col align-self-center col-md-6 offset-md-3"
              style={{ marginTop: 20 }}
            >
              <Carousel interval={2500} fade={true}>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-image"
                    src={process.env.PUBLIC_URL + "/carousel/arcade.png"}
                    alt="Arcade"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-image"
                    src={process.env.PUBLIC_URL + "/carousel/atrium-hex.png"}
                    alt="Atrium hex"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-image"
                    src={
                      process.env.PUBLIC_URL +
                      "/carousel/hypercube-perspective.png"
                    }
                    alt="Hypercube perspective"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Row>
        </Fade>
      </ScreenContainer>
    );
  }
}

export default Home;
