import React, { useCallback } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { SocialIcon } from "react-social-icons";

function Header() {
  const history = useHistory();

  const navigateToTeam = useCallback(() => {
    history.push("/team");
  }, [history]);

  const navigateToSupporters = useCallback(() => {
    history.push("/supporters");
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
        <Navbar.Brand className="nav-title" href="/">
          Meta-Harmony®
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink to="/" exact className="nav-link">
              ABOUT
            </NavLink>
            <NavLink to="/learning" exact className="nav-link">
              LEARNING
            </NavLink>
            <NavLink to="/videos" exact className="nav-link">
              VIDEOS
            </NavLink>
            <NavDropdown alignRight title="PEOPLE" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={navigateToTeam}>TEAM</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateToSupporters}>
                SUPPORTERS
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/contact" exact className="nav-link">
              CONTACT
            </NavLink>
          </Nav>

          <Nav className="ml-auto">
            <SocialIcon
              url="https://www.facebook.com/metaharmony1/"
              style={{ height: 30, width: 30, marginRight: 6, marginBottom: 4 }}
            />
            {"  "}
            <SocialIcon
              url="https://www.youtube.com/channel/UCKOcPW4eSODNT4amD23agqQ"
              style={{ height: 30, width: 30, marginBottom: 4 }}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;