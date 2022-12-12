import React from "react"
import SEO from "../components/seo"
import CampLayout from "../components/CampLayout"
import Scroller from "../components/scroller"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import NewFeatured from "../components/campsSectors/NewFeatured"
import CampAbout from "../components/campsSectors/CampAbout"
import CampProgram from "../components/campsSectors/CampProgram"
import NewCost from '../components/campsSectors/NewCost'
import Contact from "../components/indexSectors/Contact"
import ComfortAutumn from "../components/campsSectors/ComfortAutumn"
import Partners from "../components/Partners"

import bgImage from '../assets/images/autumn.jpg'

export default class PlaiPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
  }

  handlePortfolioClick(index, e) {
    e.preventDefault()
    this.setModal(true, index)
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    })
  }

  render() {
    const programData = [
      {
        span: "Програма",
        desc:
          "Десять днів у курортоному комплексі Плай серед Карпатських гір. Інтенсивна англійська у поєднанні з найкрутішими літніми розвагами. BoyarCamp- це чудова можливість відпочити з користю. Усіх учасників ми розподіляємо на підгрупи відповідно до їхнього рівня англійської та віку. Заняття проходять в інтерактивній формі з використанням новітніх методик викладання. За умови хорошої погоди - в альтанках на вулиці, біля басейну, якщо дощить – в ігрових кімнатах, лаундж-зоні та конференц-залі.",
      },
      {
        span: "Розважальна програма",
        desc:
          "Друга половина кожного дня присвячена розвагам: екскурсії, квести, змагання, спортивні ігри, майстер-класи, воркшопи, тематичні вечірки, басейн, лазер таг, катання на конях, велосипедах , сплав по річці, дискотеки, поїздки на квадроциклах, тур походи та поїздки на велосипедах, караоке, кіно... Особливістю є те, що усі види дозвілля проводяться лише англійською мовою.",
      },
    ]
    const aboutCampData = [

      {
        text:
          "Boyar Camp – табір, де ми створюємо англомовне середовище, щоб діти могли вільно спілкуватися англійською, опанувати розмовну мову та подолати мовний бар'єр. Це унікальне місце для росту, що дозволяє дітям здобути незалежність і впевненість у собі, спілкуватися, знаходити нових друзів і навіть вчитися новим навичкам.",
      },
      {
        text:
          "Шість днів у курортному місті Яремче у комфортному відпочинковому комплексі Wellland , що знаходиться на вершині гори. Інтенсивна англійська у поєднанні з найкрутішими розвагами. BoyarCamp- це чудова можливість відпочити з користю!",
      },
    ]
    const costTitle = [
      {
        text: "Табір відбудеться 24-30 жовтня 2022",
        desc: "-",
      },
      {
        text: "Локацiя: Україна, м. Яремче, вул. Івана Франка 12/1а",
        desc:
          "",
      },
      {
        text: "Вiк кемперiв: 7-17 pokiв",
        desc: "",
      },
      {
        text: "Вартість: 17 600  / Вартість для батьків: 9 600",
        desc: "Діти до 3-ох років: безкоштовно",
      },
    ]
    const costData = [
      {
        name: "Заїзд 24-30 жовтня 2022",
        about:
          "",
        timing: "Тривалість: 6 днів",
        reservation: "",
        price: "Вартість: 17 600  / Вартість для батьків: 9 600  - Діти до 3-ох років: безкоштовно",
      },
    ]
    const comfortData = [
      {
        title: "Безпека",
        text:
          "Ми забезпечуємо комплексну безпеку Ваших дітей. Закрита територія з охороною та відеонаглядом, постійний нагляд за дітьми, контроль продуктів харчування та умов проживання, організація гігієни та охорони здоров'я. ",
      },
      {
        title: "Харчування",
        text:
          "На сніданок діти зможуть вибрати собі зі шведського столу різноманітні страви, фрукти та овочі. На обід і вечерю їм подаватимуть перші та другі страви з м’ясом, овочами. Харчування у ресторані —тричі на день. Також о 21:00 є додатковий перекус: солодощі, фрукти, соки, фреші, печиво. А у кафе біля басейну діти зможуть поласувати морозивом та свіжими соками. Також ми враховуємо індивідуальні побажання батьків:алергії на певні харчі, вегетаріанське та безлактозне меню. У ресторані готелю складене меню, спеціально для дітей шкільного віку.",
      },
      {
        title: "Територія",
        text:
          "Комплекс відпочинку Wellland серед гір і соснового лісу, розташований сучасний європейський готель з трьома окремими корпусами. У кожному корпусі - 2,3,4-місні номери, в яких є односпальні та двоспальні ліжка, килимове покриття, телевізор, дерев'яні меблі, душ, туалет, фен і змінні рушники.",
      },
      {
        title: "Проживання",
        text:
          "Діти живуть у різних корпусах: хлопці та дівчата, відповідно до віку. У кожному корпусі — 2, 3, 4-місні готельні номери зі зручностями. У кімнатах — односпальні та двоспальні ліжка, килимове покриття, телевізор, дерев’яні меблі, душ, туалет, фен та змінні рушники.",
      },
    ]
    return (
      <CampLayout>
        <SEO title="Осінній табір" />
        <NewFeatured
          title="Осінній табір"
          text="Найкращий англомовний табір в Карпатах"
          image={bgImage}
        />


        <CampAbout title="Про табір" data={aboutCampData} />
        
        {/* <Cost
          title="ЦІНА ТА ДАТИ ЗАЇЗДУ"
          costTitle={costTitle}
          tabledata={costData}
        /> */}
        <NewCost     data={costData}  costTitle={costTitle} />
        <ComfortAutumn title="Комфортний відпочинок" data={comfortData} />
        <CampProgram  title="ПРОГРАМА ТАБОРУ"
          camp="BoyarCamp в Яремче – це:"
          // data={programData} 
          >

            <React.Fragment>
        <div style={{margin: `0 auto`, maxWidth: `860px`}}>
          <h3>1.	Smart</h3>
          <br/>
          <p>
          Наш табір це чудова можливість подолати мовний бар'єр і навчитися вільно висловлювати свою думку англійською мовою, активізувати теоретичну базу дитини. Для цього ми:
          </p>
          <ul style={{padding: `0`, marginLeft: `30px`}}>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            постійно спілкуємося винятково англійською. мовою
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            проводимо 2 заняття з україномовним викладачем
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            та 2 заняття з носієм мови
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            моніторимо рівень дитини
            </li>
          </ul>
        </div>
        <br/>
        <div style={{margin: `0 auto`, maxWidth: `860px`}}>
          <h3>2. Fun</h3>
          <br/>
          <p>
          Осінні канікули можуть бути не менш цікавими, ніж літні з дуже приємною спокійною атмосферою Карпатської осені. Програма табору насичена і вражень вистачить надовго :
          </p>
          <ul style={{padding: `0`, marginLeft: `30px`}}>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Майстер-класи
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Екскурсії ( Вольєрне господарство у Яремче, гора Маковиця, Буковель.
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Розваги (катання на родельбані у Буковелі, тематичні вечірки, катання на конях і квадроциклах)
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Квести, командні ігри і челенджі
            </li>
          </ul>
        </div>
        <br/>
        <div style={{margin: `0 auto`, maxWidth: `860px`}}>
          <h3>3. Тематичні дні: </h3>
          <br/>
          <p>
          new generations
          </p>
          <ul style={{padding: `0`, marginLeft: `30px`}}>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Huge
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Smart city
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Critical Thinking
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Consumer culture
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Freedom Space
            </li>
          </ul>
        </div>
          </React.Fragment>
        </CampProgram>
        <section className="page-section" id="portfolio">
          <div className="page-section-wrapper" id="gallery">
            <div className="title_box">
              <h2 className="text-center">ГАЛЕРЕЯ</h2>
            </div>
            <div className="row no-gutters" style={{ marginTop: `20px` }}>
              {this.props.data.images.edges.map((item, index) => {
                return (
                  <div
                    className="col-lg-4 col-sm-6"
                    style={{ marginBottom: `20px` }}
                    key={index}
                  >
                    <div
                      style={{ width: `96%`, height: `100%`, margin: `0 auto` }}
                    >
                      <div
                        className="portfolio-box"
                        onClick={this.handlePortfolioClick.bind(this, index)}
                        style={{ cursor: "pointer" }}
                      >
                        <Img fluid={item.node.childImageSharp.fluid} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <Contact title="КОНТАКТИ" /> 
        <Partners />
        <PortfolioModal
            show={this.state.modalShow}
            onHide={() => this.setModal(false, 0)}
          >
            <PortfolioCarousel
              images={this.props.data.images.edges}
              current={this.state.modalCurrent}
            />
        </PortfolioModal>
        </CampLayout>
    )
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "autumn/fullsize/*.jpg" } }
      sort: { fields: name }
    ) {
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
