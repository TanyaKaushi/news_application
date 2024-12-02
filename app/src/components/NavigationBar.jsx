import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { images } from "../utils/images";

import "../styles/ComponentStyles/NavigationBarStyle.css";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar-main">
      <Container>
        <Navbar.Brand className="logo" href="/">
          <img className="logo-image" src={images.logoImg} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          |
          <Nav className="me-auto">
            {/* <Nav.Link className="link" href="/trending-news">
              Trending News
            </Nav.Link>
            <Nav.Link className="link" href="/discover-more">
              Discover More
            </Nav.Link>
            <Nav.Link className="link" href="/subscribe">
              Become a Member
            </Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link className="link" href="/trending-news">
              Trending News
            </Nav.Link>
            <Nav.Link className="link" href="/discover-more">
              Discover More
            </Nav.Link>
            <Nav.Link className="link" href="/subscribe">
              Become a Member
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
