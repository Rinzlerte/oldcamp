import React from "react"
import Scrollspy from "react-scrollspy"
import {Link} from 'gatsby'
import { Navbar, Nav } from "react-bootstrap"
import Scroller from '../scroller'
import Headline from '../header_footer/headline'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <div style={{ width: `100%`, height: `200px` , backgroundColor: `white`, position: `fixed`, top: `0` }}>
        <Navbar
          className="navbar navbar-expand-lg navbar-light"
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <div className="navbar-wrapper">
              <Headline />
            <div className="container">
            <div className="head-logo"></div>
              <Navbar.Toggle aria-controls="navbarResponsive" />
              <Navbar.Collapse id="navbarResponsive">
                <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                  <Scrollspy className="navbar-nav"
                    items={["#", "about", "cost","gallery", "contact", "partners"]}
                    currentClassName="active" rootEl={"#mainNav"} offset={-100}>
                    <li className="nav-item" href="#">
                      <Link className="home-link" to="/">ГОЛОВНА</Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link className={"js-scroll-trigger"} href="#about" onClick={Scroller.handleAnchorScroll}>ПРО НАС</Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link className={"js-scroll-trigger"} href="#cost" onClick={Scroller.handleAnchorScroll}>ЦІНА</Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link className={"js-scroll-trigger"} href="#gallery" onClick={Scroller.handleAnchorScroll}>ГАЛЕРЕЯ</Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>КОНТАКТИ</Nav.Link>
                  </li>
                  <li className="nav-item">
                      <Nav.Link className={"js-scroll-trigger"} href="#partners" onClick={Scroller.handleAnchorScroll}>ПАРТНЕРИ</Nav.Link>
                    </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
            </div>
         </div>
       </Navbar>
     </div>
    );
  }
}
