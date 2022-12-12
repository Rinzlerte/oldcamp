import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import {Link} from 'gatsby'
import Scroller from '../scroller'
import Headline from './headline'
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
        <header style={{ width: `100%`, position: `fixed`}}>
          <Navbar
            className="navbar navbar-expand-lg navbar-light"
            id="mainNav"
            expand="lg"
            collapseOnSelect={true}
          >
            <div className="navbar-wrapper">
              <Headline />
              <div className="container">
                <Link to="/" className="head-logo"></Link>
                <Navbar.Toggle aria-controls="navbarResponsive" />
                <Navbar.Collapse id="navbarResponsive">
                  <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                    <Scrollspy
                      className="navbar-nav"
                      items={[
                        "camps",
                        "about",
                        "gallery",
                        "team",
                        "contact",
                        "partners"
                      ]}
                      currentClassName="active"
                      rootEl={"#mainNav"}
                      offset={-100}
                    >
                      <li className="nav-item">
                        <Nav.Link
                          className={"js-scroll-trigger"}
                          href="#camps"
                          onClick={Scroller.handleAnchorScroll}
                        >
                          ТАБОРИ
                        </Nav.Link>
                      </li>
                      <li className="nav-item">
                        <Nav.Link
                          className={"js-scroll-trigger"}
                          href="#about"
                          onClick={Scroller.handleAnchorScroll}
                        >
                          ПРО НАС
                        </Nav.Link>
                      </li>
                      <li className="nav-item">
                        <Nav.Link
                          className={"js-scroll-trigger"}
                          href="#gallery"
                          onClick={Scroller.handleAnchorScroll}
                        >
                          ГАЛЕРЕЯ
                        </Nav.Link>
                      </li>
                      <li className="nav-item">
                        <Nav.Link
                          className={"js-scroll-trigger"}
                          href="#team"
                          onClick={Scroller.handleAnchorScroll}
                        >
                          КОМАНДА
                        </Nav.Link>
                      </li>
                      <li className="nav-item">
                        <Nav.Link
                          className={"js-scroll-trigger"}
                          href="#contact"
                          onClick={Scroller.handleAnchorScroll}
                        >
                          КОНТАКТИ
                        </Nav.Link>
                      </li>
                      <li className="nav-item">
                        <Nav.Link
                          className={"js-scroll-trigger"}
                          href="#partners"
                          onClick={Scroller.handleAnchorScroll}
                        >
                          ПАРТНЕРИ
                        </Nav.Link>
                      </li>
                    </Scrollspy>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </div>
          </Navbar>
        </header>
        <div className="masthead">
          <div className="masthead_container">
                  <div className="masthead-wrapper">
                      <h3 className="text-uppercase text-black font-weight-bold b_f py-5">
                        Найкращий англомовний табір
                      </h3>
                        <div className="masthead_box_line">
                          <div className="icon-img promo_1"></div><p className=" text-black font-weight-bold mb-5 b_color">
                              BOYAR CAMP - табір де ми створюємо англомовне середовище, щоб діти могли вільно спілкуватися
англійською, опанувати розмовну мову та подолати мовний бар'єр
                        </p>
                        </div>
                        <div className="masthead_box_line">
                              <div className="icon-img promo_2"></div> <p className=" text-black font-weight-bold mb-5 b_color">
                          З дітьми працюють досвідчені педагоги та носії мови. Для кожного заїзду розробляється спеціальна інтерактивна програма: заняття та розваги проводятся виключно англійською мовою.
                        </p>
                        </div>
                        <div className="masthead_box_line">
                        <a
                          className="btn btn-primary btn-lg b_f js-scroll-trigger"
                          href="#camps"
                          onClick={Scroller.handleAnchorScroll}
                        >
                          ДЕТАЛЬНІШЕ
                        </a>
                  </div>
              </div>
          </div>
        </div>
      </>
    )
  }
}