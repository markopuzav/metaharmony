import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { Row } from "reactstrap";
import ScreenContainer from "../components/ScreenContainer";
import Fade from "react-bootstrap/Fade";
import Video from "../components/Video";
import { INTRODUCING_MH } from "../constants";

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
        <Row>
          <div
            className="col align-self-center col-md-8 offset-sm-2"
          >
            <h2 className="text-center" style={{marginRight: 100}}>
              "Clarity & Intuition
            </h2>
            <h2 className="text-center" style={{marginLeft: 100}}>
              with Harmony"
            </h2>
          </div>
        </Row>
      </Fade>

      <Fade in={this.state.open}>
        <Row style={{ marginBottom: "-16%" }}>
          <div className="col align-self-center">
            <Row style={{ paddingBottom: 160, marginLeft: 20, marginTop: 30 }}>
              <h2>
                Colour
              </h2>
              <p>
                Meta-Harmony is a world where notes and chords have colour.
                Notes live in primary colours which mix together to make secondary colours, this is where chords live.
              </p>
            </Row>
          </div>
          <div className="col">
            <Image
              src={process.env.PUBLIC_URL + "/images/colour.png"}
              alt="Colour example"
              style={{ paddingRight: 16, maxHeight: "80%"}}
              fluid
            ></Image>
          </div>
        </Row>
      </Fade>

      <Fade in={this.state.open}>
        <Row>
          <div className="col">
            <Image
              src={process.env.PUBLIC_URL + "/images/sound.png"}
              alt="Sound example"
              style={{ marginLeft: 10 }}
              fluid
            ></Image>
          </div>
          <div className="col align-self-center">
            <Row style={{  marginLeft: 20}}>
              <h2>
                Sound
              </h2>
              <p>
                These six colours reveal six sounds, comprehensively showing us what notes and chords can do.
              </p>
            </Row>
          </div>
        </Row>
      </Fade>


      <Fade in={this.state.open}>
        <Row>
          <div className="col align-self-center">
            <Row style={{ paddingBottom: 160, marginLeft: 20, marginTop: 40}}>
              <h2>
                Shape
              </h2>
              <p>
                To see all this in full resolution, we build shapes.
                The shapes of Meta-Harmony show us exactly how notes, chords and keys relate to each other.
              </p>
            </Row>
          </div>
          <div className="col">
            <Image
              src={process.env.PUBLIC_URL + "/images/shape.jpg"}
              alt="Shape example"
              style={{ paddingRight: 16, maxHeight:"80%"}}
              fluid
            ></Image>
          </div>
        </Row>
      </Fade>

      <Fade in={this.state.open}>
        <Row>
          <div className="col align-self-center col-md-8 offset-md-2">
            <Video youtubeId={INTRODUCING_MH} />
          </div>
        </Row>
      </Fade>

        {/*
          CAROUSEL DISABLED FOR NOW
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
        */}
      </ScreenContainer>
    );
  }
}

export default Home;
