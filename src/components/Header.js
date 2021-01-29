import React, { useCallback } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { SocialIcon } from "react-social-icons";
import Image from "react-bootstrap/Image";

function Header() {
  const history = useHistory();

  const navigateToEssentials1 = useCallback(() => {
    history.push(process.env.PUBLIC_URL + "/essentials1");
  }, [history]);

  const navigateToEssentials2 = useCallback(() => {
    history.push(process.env.PUBLIC_URL + "/essentials2");
  }, [history]);

  const navigateToTeam = useCallback(() => {
    history.push(process.env.PUBLIC_URL + "/team");
  }, [history]);

  const navigateToSupporters = useCallback(() => {
    history.push(process.env.PUBLIC_URL + "/supporters");
  }, [history]);

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="white"
      variant="light"
      className="shadow mb-5"
      sticky="top"
    >
      <Container fluid="md">
        <img
          src={process.env.PUBLIC_URL + "/main-logo.png"}
          alt="Meta-harmony Logo"
          style={{
            height: 60,
            float: "left",
            paddingRight: 12,
          }}
        />
        <Navbar.Brand className="nav-title" href={process.env.PUBLIC_URL + "/"}>
          Meta-Harmony
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink
              to={process.env.PUBLIC_URL + "/about"}
              exact
              className="nav-link"
            >
              ABOUT
            </NavLink>
            {/*
              HIDDEN FOR THE TIME BEING
            <NavLink
              to={process.env.PUBLIC_URL + "/learning"}
              exact
              className="nav-link"
            >
              LEARNING
            </NavLink>
            */}
 
            <NavDropdown alignRight title="ESSENTIALS" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={navigateToEssentials1}>1: Major Chords</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateToEssentials2}>2: Minor Chords</NavDropdown.Item>
            </NavDropdown>
  
            <NavDropdown alignRight title="PEOPLE" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={navigateToTeam}>TEAM</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateToSupporters}>
                SUPPORTERS
              </NavDropdown.Item>
            </NavDropdown>
            {/*
              HIDDEN UNTIL FUNCTIONAL
              <NavLink
              to={process.env.PUBLIC_URL + "/contact"}
              exact
              className="nav-link"
            >
              CONTACT
            </NavLink>*/}
          </Nav>

          <Nav className="ml-auto">
            <SocialIcon
              url="https://www.instagram.com/tomglazebrook/"
              target="_blank"
              style={{ height: 30, width: 30, marginRight: 6, marginBottom: 4 }}
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UCKoLZ-akJToEIt2M98pCqAA"
              target="_blank"
              style={{ height: 30, width: 30, marginRight: 6, marginBottom: 4 }}
            />
            <a href="https://discord.gg/jR9pn4EAfV" target="_blank">
              <Image
                src={process.env.PUBLIC_URL + "/images/discord-icon.png"}
                alt="Discord icon"
                style={{ height: 30, width: 30, marginRight: 6, marginBottom: 4 }}
              ></Image>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
