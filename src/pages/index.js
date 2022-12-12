import React from "react"
import Scroller from "../components/scroller"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

import About from "../components/indexSectors/About"
import Team  from "../components/indexSectors/Team"
import Camps from "../components/indexSectors/Camps"
import FotoGallery from "../components/indexSectors/FotoGallery"
import Contact from "../components/indexSectors/Contact"
import Partners from "../components/Partners"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Головна" />
        <Camps title="НАШІ ТАБОРИ"/>
        <About title="ЯК ПОТРАПИТИ В BOYAR?" />
        <section className="page-section" id="gallery">
          <div className="page-section-wrapper">
            <div className="title_box">
              <h2 className="text-center">ГАЛЕРЕЯ</h2>
            </div>
            <div className="row no-gutters" style={{marginTop:`60px`}}>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}>
                  <a className="portfolio-box" href="img/homegallery/fullsize/pic01.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                    <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}>
                <a className="portfolio-box" href="img/homegallery/fullsize/pic02.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                </a>
              </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                <a className="portfolio-box" href="img/homegallery/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                <a className="portfolio-box" href="images/homegallery/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                    <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}>
                  <a className="portfolio-box" href="img/homegallery/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                    <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                  <a className="portfolio-box" href="img/homegallery/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                    <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                  <a className="portfolio-box" href="img/homegallery/fullsize/pic07.jpg" onClick={this.handlePortfolioClick.bind(this, 6)}>
                    <Img fluid={this.props.data.images.edges[6].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                  <a className="portfolio-box" href="img/homegallery/fullsize/pic08.jpg" onClick={this.handlePortfolioClick.bind(this, 7)}>
                    <Img fluid={this.props.data.images.edges[7].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                  <a className="portfolio-box" href="img/homegallery/fullsize/pic09.jpg" onClick={this.handlePortfolioClick.bind(this, 8)}>
                    <Img fluid={this.props.data.images.edges[8].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
        <FotoGallery />
        <Team title="Команда" />
        <Contact title="Контакти"/>
        <Partners />
      </Layout>
    )
  }
}

export default IndexPage

export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "homegallery/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth:  550) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`