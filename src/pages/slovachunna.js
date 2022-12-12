import React from "react"
import SEO from "../components/seo"
import CampLayout from "../components/CampLayout"
import Scroller from "../components/scroller"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import FeaturedSlovachunni from "../components/campsSectors/FeaturedSlovachunni"
import CampAbout from "../components/campsSectors/CampAbout"
import CampProgram from "../components/campsSectors/CampProgram"
import Cost from "../components/campssectors/Cost"
import Contact from "../components/indexSectors/Contact"
import ComfortSlovachunni from "../components/campsSectors/ComfortSlovachunni"
import NewCost from '../components/campsSectors/NewCost'
import Partners from "../components/Partners"

export default class SlovachunniPage extends React.Component {
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
        "span": "Програма",
        "desc": "Учасники програми будуть розбиті на групи по 10-14 осіб для проведення мовних семінарів. Групи будуть складатися з учасників з різних країн, щоб звести до мінімуму спокусу говорити на їх рідних мовах. Кожна група буде проводити 2 мовних семінару в день протягом усього проекту."
      },
      {
        "span": "",
        "desc": "На семінарах буде зроблений акцент на розмовній мові. Там не буде багато письма, читання або граматики, але будуть заходи, які змусять їх говорити англійською мовою і спілкуватися з учасниками з інших країн."
      },
      {
        "span": "",
        "desc": "Крім того, у кожної групи буде урок про ЄС. Завдяки цьому уроку вони дізнаються, що таке Лісабонський договір, чому він так важливий, які основні інститути ЄС, що таке Шенгенська зона, роль Європейського парламенту і багато іншого."
      },
      {
        "span": "",
        "desc": "6 ночей в готелі Sorea, користування готельними зручностями, такими як: критий басейн, настільний теніс, більярд, дартс. 3-ох разове, повноцінне харчування мовні семінари з носіями мови участь у спортивних, мистецьких та інших заходах з маршруту проекту, трансфер, страхівка, вхідні квитки в аквапарк в Попраді та на фунікулер у словацьких Татрах, супровід нашого педагога, щоденні фотозвіти"
      },
    ];
    const aboutCampData = [
      { "text": "INTERNATIONAL VILLAGE - це міжнародний проект для підлітків з різних країн (більше 15 країн, орієнтовна кількість 130-140 людей), створений для комунікації. Протягом 7 днів вони беруть участь в різних заходах, таких як мовні семінари з носіями мови з США, Великобританії, Канади та Австралії, спортивні заходи, художні та міжкультурні заходи, а також семінари."},
      { "text": "Завдяки цьому проекту у дітей буде можливість зустрітися та поспілкуватися зі своїми однолітками з інших країн істворити нові міжнародні та дружні відносини. Кемпери матимуть можливість взнати культуру інших націй, дізнатись, яку музику слухають їхні однолітки з інших країн та як люблять проводити час. Проект також зробить їх більш відкритими та комунікабельними і дозволить знайти справжніх друзів на все життя. Проект розрахований на підлітків 13-17 років, які володіють англійською мовою на рівні не нижче Pre -intermediate."},
    ];
  
    const costTitle = [
        {
            "text": "-" ,
            "desc": "-"
        },
        {
            "text": "-" ,
            "desc": "-"
        },
        {
            "text": "-" ,
            "desc": "-"
        },
        {
            "text": "-" ,
            "desc": "-"
        },
    ]
    const  costData = [
      {
        "name" : "-",
        "about" :"-",
        "timing": "-",
        "reservation":"-",
        "price":"-" 
      },
    ];
    const comfortData = [
      {
        "title": "Безпека",
        "text" :"Ми забезпечуємо комплексну безпеку Ваших дітей. Закрита територія з охороною, постійний нагляд за дітьми, контроль продуктів харчування та умов проживання, організація гігієни та охорони здоров'я. На території табору постійно присутній дитячий лікар."
      },
      {
        "title": "Харчування",
        "text" :"На сніданок діти зможуть вибрати собі зі шведського столу різноманітні страви, фрукти та овочі. На обід і вечерю їм подаватимуть перші та другі страви з м’ясом, овочами. Харчування у ресторані — тричі на день. У ресторані готелю складене меню, спеціально для дітей шкільного віку."
      },
      {
        "title": "Басейн",
        "text" :"В готелі Sorea є критий басейн розміром 15 на 8 метрів, глибиною 1 м 60 см. Вода в басейні постійно підігрівається до комфортної температури, очищується і оновлюється через фільтри. Діти зможуть купатися в басейні у відведений час під наглядом викладачів."
      },
      {
        "title": "Проживання",
        "text" :"Для покращення процесу вивчення англійської мови учасники будуть розміщені в кімнатах змішаної національності, що означає, що в кожній кімнаті будуть представники 2, 3 або 4 різних країн У кімнатах — односпальні та двоспальні ліжка, килимове покриття, телевізор, дерев’яні меблі, душ та туалет."
      }    
    ];

  return (
    <CampLayout>
      <SEO title="Slovachunna"/>
      <FeaturedSlovachunni title="Словачиннa" text="ДИТЯЧИЙ АНГЛОМОВНИЙ ТАБІР"/>
      <CampAbout title="Про табір" data={aboutCampData}/>

      <NewCost     data={costData}  costTitle={costTitle} />
      <ComfortSlovachunni title="Комфортний відпочинок" data={comfortData}/>
      <CampProgram title="ПРОГРАМА ТАБОРУ" camp="BoyarCamp в Словачинні – це:" data={programData}/>
      <section  className="page-section" id="portfolio">
        <div className="page-section-wrapper" id="gallery">
          <div className="title_box">
            <h2 className="text-center">ГАЛЕРЕЯ</h2>
          </div>
          <div className="row no-gutters" style={{marginTop:`20px`}}>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}>
                      <a className="portfolio-box" href="img/slovachunna/fullsize/pic01.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                        <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}>
                    <a className="portfolio-box" href="img/slovachunna/fullsize/pic02.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                      <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                    </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                    <a className="portfolio-box" href="img/slovachunna/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                      <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                    </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                  <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                  <a className="portfolio-box" href="images/slovachunna/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                      <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                    </a>
                  </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                    <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}>
                      <a className="portfolio-box" href="img/slovachunna/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                        <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                  <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                    <a className="portfolio-box" href="img/slovachunna/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                      <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                    </a>
                  </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                  <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                    <a className="portfolio-box" href="img/slovachunna/fullsize/pic07.jpg" onClick={this.handlePortfolioClick.bind(this, 6)}>
                      <Img fluid={this.props.data.images.edges[6].node.childImageSharp.fluid}/>
                    </a>
                  </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                  <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                    <a className="portfolio-box" href="img/slovachunna/fullsize/pic08.jpg" onClick={this.handlePortfolioClick.bind(this, 7)}>
                      <Img fluid={this.props.data.images.edges[7].node.childImageSharp.fluid}/>
                    </a>
                  </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                  <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                    <a className="portfolio-box" href="img/slovachunna/fullsize/pic09.jpg" onClick={this.handlePortfolioClick.bind(this, 8)}>
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
            <Cost title="ЦІНА ТА ДАТИ ЗАЇЗДУ" costTitle={costTitle} tabledata={costData}/>
            <Contact title="КОНТАКТИ"/>
            <Partners />
      </CampLayout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob:  "slovachunna/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`