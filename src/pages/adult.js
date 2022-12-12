import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Scroller from "../components/scroller"
import CampLayout from "../components/CampLayout"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

import FeaturedAdult from "../components/campsSectors/FeaturedAdult"
import CampAbout from "../components/campsSectors/CampAbout"
import NewCost from '../components/campsSectors/NewCost'
 import CampProgram from "../components/campsSectors/CampProgram"
import Apply from "../components/indexSectors/Apply"
import Partners from "../components/Partners"
import ComfortAdult from '../components/campsSectors/ComfortAdult'

export default class AdultPage extends React.Component {
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
 
    const programData = [
      {
        span: "Приблизний розклад дня :",
        desc:
          "Кожного ранку - лісові прогулянки (за бажанням), о 10:30- розмовний клуб, о 12:00 - граматичний; 13:00-обід, вільний час до 18:00 (басейн,факультативні екскурсії). О 18:00-вечеря і дозвілля англійською (настільні ігри, перегляд фільму). З 21:00 вечірні програми - (коктельна вечірка,баня)",
      },
      {
        span: "Факультативно пропонуємо :",
        desc:
          "рафтинг, підйом на Говерлу, похід на Маковицю та дегустація сирів, катання на джипах, Буковель та інші розваги =)",
      },
    ];

    const aboutCampData = [
      { "text": "BoyarCamp Adults 2022 кличе в Карпати!"},
      { "text": "Бажаєш зануритись в англомовне середовище та круто провести час в самому серці Карпат?"},
      { "text": "На Вас чекатимуть: вечірки, заняття з англійської мови, 24/7 English, настільні та командні ігри, квести та розваги, квадроцикли, коні, велосипеди, джипи. та багато-багато іншого."},
      { "text" : "Залишай заявку і проведи найкрутіший вікенд з користю!"}
    ];
  
    const costTitle = [
      {
        text: "Табiр вiдбудеться: 5.08 - 8.08",
      },
      {
        text: "Локацiя: Яремче, готель Wellland",
     
      },
      {
        text: "Вік: 17+",
      },
      {
        text: "Вартість: 8700 грн",
      },
    ];

    const costData = [
      {
        name: "5.05-8.08 - Adult Camp",
        about:
          "Незабутній англомовний вікенд у Карпатах для дорослих! Комфортний клуб-готель Wellland  у Яремче, смачна їжа, 4 дні серед гір, повністю англомовне середовище, вечірки, катання на джипах, басейн, нові знайомства та знання. Тема заїзду: Hollywood- ми будемо обговорювати популярні фільми, грати настільні ігри, піднімемося на полонину Маковицю для дегустації овечих сирів, а в останній вечір влаштуємо справжню церемонію Оскар.",
        timing: "",
        reservation: "",
        price: "",
      }
    ];

    const comfortData = [
      {
        title: "Неймовірна атмосфера",
        text:
          "Літо, гори і чудова компанія. Комфортний клуб-готель у самому серці Яремче, харчування у ресторані готелю, цікаві екскурсії, спілкування та вечірки.Два басейни на території, тренажерний майданчик, спортивне поле з гумовим покриттям, сосновий ліс з альтанками, лаунж зона і мальовнича тераса.",
      },
      {
        title: "Покращити англійську",
        text:
          "Це Ваш чудовий шанс подолати мовний бар'єр. Усі учасники ділитимуться на початковий і просунутий рівень для комфортного спілкування. Щодня 2-3 години цікавих дискусій на цікаві теми з викладачами англійської і носієм мови.",
      },
      {
        title: "Розважальна програма",
        text:
          "Це варіант комфортного відпочинку з користю і активностям. Катання на джипах, похід до водоспаду Дівочі сльози, вечір в бані, басейн щодня, вранішня йога, вечірнє вино та настільні ігри, похід по гриби, рафтинг та Говерла за бажанням.",
      },
      
    ]
    return (
      <CampLayout>
            <SEO title="Дорослий"  description=""/>
            <FeaturedAdult title="ADULTS" text="ДОРОСЛИЙ АНГЛОМОВНИЙ ТАБІР В КАРПАТАХ"/>
            <CampAbout title="Про табір" data={aboutCampData}/>
            <NewCost     data={costData}  costTitle={costTitle} />
            <ComfortAdult title="Комфортний відпочинок" data={comfortData} />
            <CampProgram
              title="ПРОГРАМА ТАБОРУ"
              camp="BoyarCamp ADULT – це:"
              data={programData}
            />
            <section className="page-section" id="gallery">
              <div className="page-section-wrapper">
                <div className="title_box">
                  <h2 className="text-center">ГАЛЕРЕЯ</h2>
                </div>
                <div className="row no-gutters" style={{marginTop:`20px`}}>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}>
                      <a className="portfolio-box" href="img/adults/fullsize/pic01.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                        <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}>
                    <a className="portfolio-box" href="img/adults/fullsize/pic02.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                      <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                    </a>
                  </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                    <a className="portfolio-box" href="img/adults/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                      <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                    </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                    <a className="portfolio-box" href="images/adults/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                        <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}>
                      <a className="portfolio-box" href="img/adults/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                        <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                      <a className="portfolio-box" href="img/adults/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                        <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                      <a className="portfolio-box" href="img/adults/fullsize/pic07.jpg" onClick={this.handlePortfolioClick.bind(this, 6)}>
                        <Img fluid={this.props.data.images.edges[6].node.childImageSharp.fluid}/>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                      <a className="portfolio-box" href="img/adults/fullsize/pic08.jpg" onClick={this.handlePortfolioClick.bind(this, 7)}>
                        <Img fluid={this.props.data.images.edges[7].node.childImageSharp.fluid}/>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                      <a className="portfolio-box" href="img/adults/fullsize/pic09.jpg" onClick={this.handlePortfolioClick.bind(this, 8)}>
                        <Img fluid={this.props.data.images.edges[8].node.childImageSharp.fluid}/>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                      <a className="portfolio-box" href="img/adults/fullsize/pic10.jpg" onClick={this.handlePortfolioClick.bind(this, 9)}>
                        <Img fluid={this.props.data.images.edges[9].node.childImageSharp.fluid}/>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                      <a className="portfolio-box" href="img/adults/fullsize/pic11.jpg" onClick={this.handlePortfolioClick.bind(this, )}>
                        <Img fluid={this.props.data.images.edges[10].node.childImageSharp.fluid}/>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                      <a className="portfolio-box" href="img/adults/fullsize/pic12.jpg" onClick={this.handlePortfolioClick.bind(this, 11)}>
                        <Img fluid={this.props.data.images.edges[11].node.childImageSharp.fluid}/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Apply title="КОНТАКТИ"/>
            <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
              <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
            </PortfolioModal>
            <Partners />
      </CampLayout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "adults/fullsize/*.jpg"}}, sort: {fields: name}) {
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