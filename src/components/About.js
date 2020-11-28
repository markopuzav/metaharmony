import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { Row } from "reactstrap";
import Fade from "react-bootstrap/Fade";
import ScreenContainer from "../components/ScreenContainer";

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

      <Row style={{marginLeft: "10%", marginRight: "10%", marginBottom: 30}}>
        <h3> What is Meta-Harmony? </h3>
        <div>
          <p>
            Meta-Harmony is a method for understanding and using musical harmony.
            Through the use of colour and shape, it provides an accessible approach to harmony.
          </p>
        </div>
      </Row>
      <Row style={{marginLeft: "10%", marginRight: "10%", marginBottom: 30}}>
        <h3> Who is it for? </h3>
        <div>
          <p>
            If you want to use harmony with intuition and clarity,
            Meta-Harmony is for you. Maybe you’re a singer-songwriter looking for <i>that chord</i>,
            perhaps you’re a composer looking to enrich your harmonic pallet,
            or maybe you’re a producer wanting more autonomy with your sound.
          </p>
          <p>
            Whatever the goal, Meta-Harmony will give you the tools to develop and explore your own harmonic voice.
          </p>
        </div>
      </Row>
      <Row style={{marginLeft: "10%", marginRight: "10%"}}>
        <h3>How do I begin?</h3>
        <div>
          <Row style={{paddingTop: 20, paddingBottom: 20}}>
            <div className="col  align-self-center">
              <p>
                To enjoy the riches that Meta-Harmony has to offer, join the discord community.
              </p>
            </div>
            <div className="col" style={{marginLeft: 20}}>
              <iframe
                src="https://discord.com/widget?id=719936662263824465&theme=dark"
                width="350"
                height="300"
                allowtransparency="true"
                frameborder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
              </iframe>
            </div>
          </Row>
          <p>
            This is a place for all things Meta-Harmony - a place to learn,
            ask questions and share ideas. Not only will you find videos and diagrams explaining the method,
            but also practical challenges to experience it in your own way with the support of the Meta-Harmony community.
          </p>
          <p>
            If you want to develop your understanding and use of harmony alongside like-minded others, this is the place for you.
          </p>
        </div>
      </Row>

      {/*
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
