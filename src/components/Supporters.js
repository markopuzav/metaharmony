import React, { Component } from "react";
import ScreenContainer from "../components/ScreenContainer";
import Image from "react-bootstrap/Image";


class Supporters extends Component {
  render() {
    return (
      <ScreenContainer>
        <div className="row justify-content-start">
          <div className="col-lg-2 align-self-center">
            <Image
              src={process.env.PUBLIC_URL + "/people/roz.jpg"}
              alt="Tom picture"
              style={{ marginBottom: 16, marginLeft: -8 }}
              fluid
            ></Image>
          </div>
          <div className="col align-self-center">
            <h2>Roz Harding</h2>
            <p style={{ paddingLeft: 16 }}>
              <i>Saxophonist, Composer and Educator</i>
            </p>
          </div>
          <p>
            I am a saxophonist and composer based in Devon. I have a BA Hons
            Jazz from Middlesex University where I studied saxophone with Mark
            Lockheart.
          </p>
          <p>
            I have played with nationally known jazz musicians in a variety of
            ensembles and recording projects, and taken my music to established
            venues including The Vortex, London Jazz Festival and Birmingham
            Jazz Lines. I like to play new music and can be found playing
            saxophone in Mike Westbrook’s Uncommon Orchestra, Billie Bottle &
            The Multiple, Breath of Great Life, A Quite Night In and leading my
            own project SUPERMOOD.
          </p>
          <p>
            I have been involved with youth music projects across the country
            and in Europe, including work with the Devon Youth Jazz Orchestra. I
            currently teach saxophone and am the Musical Director for Jazz
            Project and Jambassadors at Exeter College Music Academy, and teach
            saxophone and improvisation for Plymouth University and South WestI
            have begun to apply meta-harmony to my music. I am excited and
            intrigued to explore meta-harmony for improvisation, performance and
            composition. The deep nature of meta-harmony really appeals and I
            feel I will be entering a new phase of music making. I am only at
            the beginning of acquiring this new insight into harmony but I can
            sense its possibilities as an imaginative, expressive and personal
            tool. I feel I am en route to deepen my understanding of music
            harmony and to set it free. Music School.
          </p>
          <p>
            I have begun to apply meta-harmony to my music. I am excited and
            intrigued to explore meta-harmony for improvisation, performance and
            composition. The deep nature of meta-harmony really appeals and I
            feel I will be entering a new phase of music making. I am only at
            the beginning of acquiring this new insight into harmony but I can
            sense its possibilities as an imaginative, expressive and personal
            tool. I feel I am en route to deepen my understanding of music
            harmony and to set it free.
          </p>
          <p className="text-center">
            <a href="http://www.rozharding.com">www.rozharding.com</a>
          </p>
        </div>
      </ScreenContainer>
    );
  }
}

export default Supporters;
