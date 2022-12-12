import React from "react"
import SEO from "../components/seo"
import CampLayout from "../components/CampLayout"
import Scroller from "../components/scroller"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import CampAbout from "../components/campsSectors/CampAbout"
import CampProgram from "../components/campsSectors/CampProgram"
import NewCost from '../components/campsSectors/NewCost'
import Contact from "../components/indexSectors/Contact"
import Partners from "../components/Partners"



import CampHero from '../components/new/CampHero'
import CampComfort from '../components/new/CampComfort'

import imgsafe from '../images/comfort/yaremche/save.jpg';
import imgfood from '../images/comfort/yaremche/food.jpg';
import imgpool from '../images/autumnadult_terytoria.jpg'
import imgliving from '../images/comfort/yaremche/home.jpg';



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
        span: "Щодня у нас буде творчий майстер-клас;",
      },
      {
        span: "Clubs: music (Genki songs), cooking,lego",
      },
      {
        span: "Clubs: music (Genki songs), cooking,lego",
      },
      {
        span: "Clubs: music (Genki songs), cooking,lego",
      },
      {
        span: "Clubs: music (Genki songs), cooking,lego",
      },

    ]
    const aboutCampData = [
      {
        text:
          "Діти практикують англійську, навчаються, розважаються, а батьки відпочивають, насолоджуючись Карпатськими краєвидами!",
      },
      {
        text:
          "Для наймолодших кемперів ми створили унікальну програму. Діти отримають свої перші кемперські футболки та рюкзачки. Викладачем у малят буде кваліфікований вчитель Preschool Boyar.",
      },
    ]
    const costTitle = [
      {
        text: "Заїзди у табір тимчасово скасовано",
        desc: "-",
      },
      {
        text: "Україна, м. Яремче, вул. Івана Франка 12/1а",
        desc:
          "",
      },
      {
        text: "Вiк кемперiв: 3-5  pokiв",
        desc: "-",
      },
      {
        text: "Вартість для 1 дошкільняти і 1 дорослого: 30.07-8.08(10 днів)- 24500 грн 30.08-5.08( 7 днів)- 14500 грн",
        desc: "-",
      },
    ]
    const costData = [
      // {
      //   name: "Заїзд відбудеться 24-30 жовтня 2021",
      //   about:
      //     "А що якщо.....Якщо поєднати навколосвітню подорож і свята календарного року?Ми отримаємо неймовірну програму Boyar Camp, де кожен день буде колоритним і веселим! Мова подорожі Планетою та часом ( рік за 10 днів)- ONLY ENGLISH! Тематичні дні: Американське Різдво, День святого Патрика ( Ірландія), Сонг Кран ( Таїландський Новий рік),Холі (Індія),Віденський бал, Цисі( Китайський день закоханих), Ла томатіна ( Іспанія), Фестиваль в Ріо, Марш Зомбі (Канада)",
      //   timing: "Тривалість: 10 днів",
      //   reservation: "Для дитини 3-5 років - 4200, Для мами- 6500, Діти до 3-ох років - безкоштовно",
      //   price: "Повна вартість: 17 900 грн",
      // },
    ]
    
    return (
      <CampLayout>
        <SEO title="Літній сімейний табір  Boyarcamp - ( Батьки + дошкільнята)" />

        <CampHero  
          title="Літній сімейний табір ( Батьки + дошкільнята)"
          sectionclassname = "hero-bg-precshool"
          
         />
        <CampAbout title="Про табір" data={aboutCampData}>
          
          <ul style={{marginTop: `30px`, listStyle: `none`}}>
            <li>
            ●	Щодня у нас буде творчий майстер-клас;
            </li>
            <li> 
            ●	Clubs: music (Genki songs), cooking,lego.

            </li>
            <li>
            ●	Екскурсія у вольєрне господарство у Яремче, на Буковель.
            </li>
            <li>
            ●	Вечірні читання з батьками;
              </li>
              <li>
              ●	Ігри, квести і дружні змагання.
              </li>

          </ul>
          </CampAbout>
        <NewCost     data={costData}  costTitle={costTitle} />

        <CampComfort  
            title="Комфортний відпочинок"  
            s1title="БЕЗПЕКА"
            s1description="Ми забезпечуємо комплексну безпеку усіх учасників табору . Закрита територія з охороною та відеонаглядом, постійний нагляд за дітьми, контроль продуктів харчування та умов проживання, організація гігієни та охорони здоров'я" 
            s2title="ХАРЧУВАННЯ" 
            s2description="На сніданок можна вибрати собі зі шведського столу різноманітні страви, фрукти та овочі. На обід і вечерю подаватимуть перші та другі страви з м’ясом, овочами. Харчування у ресторані —тричі на день. Також о 11:30 та 21:00 є додаткові перекуси: солодощі, фрукти, соки, фреші, печиво.Також ми враховуємо індивідуальні побажання батьків:алергії на певні харчі, вегетаріанське та безлактозне меню." 
            s3title="ТЕРИТОРІЯ" 
            s3description="Комплекс відпочинку Wellland серед гір і соснового лісу, розташований сучасний європейський готель з трьома окремими корпусами. У кожному корпусі - 2,3,4-місні номери, в яких є односпальні та двоспальні ліжка, килимове покриття, телевізор, дерев'яні меблі, душ, туалет, фен і змінні рушники."
            s4title="ПРОЖИВАННЯ" 
            s4description="При поселенні ми орієнтуємося на кількість учасників з однієї сім’ї і намагаємося селити сім’ями. Для мами і дитини 3-5 років передбачено 1 двоспальне або півтораспальне ліжко. В одному номері можуть бути 2 - 3 мам чи татусів з дітьми однієї статі. За додаткову оплату ( 350 грнніч) може бути окреме ліжко для дитини."
            img1={imgsafe}
            img2={imgfood}
            img3={imgpool}
            img4={imgliving}
        />
        <CampProgram
          title="ПРОГРАМА ТАБОРУ"
        >
                 <React.Fragment>
        <div style={{margin: `0 auto`, maxWidth: `860px`}}>
          <h3>1. Cartoons World</h3>
          <br/>
          <p>
          Табір для наймолодших Cartoons - частина школярського табору Hollywood, тому це буде справді зірковий відпочинок, ми поринемо у світ Дісней та самі станемо улюбленими героями.Це незабутній досвід і для дітей, і для батьків!
          </p>
        </div>
        <br/>
        <div style={{margin: `0 auto`, maxWidth: `860px`}}>
          <h3>1. Cartoons World</h3>
          <br/>
          <p>
          Табір для наймолодших Cartoons - частина школярського табору Hollywood, тому це буде справді зірковий відпочинок, ми поринемо у світ Дісней та самі станемо улюбленими героями.Це незабутній досвід і для дітей, і для батьків!
          </p>
        </div>

    
        <br/>

        <div style={{margin: `0 auto`, maxWidth: `860px`}}>
          <h3>2. Екскурсії</h3>
          <br/>
          <p>
          Ми відвідаємо Вольєрне господарство у Яремче, де познайомимося з Карпатськими мешканцями фауни. Погуляємо у Буковелі та відомому Гуцул Ленді. 
І одна з наших найпопулярніших екскурсій-босонога стежна: дітки босими ніжка ходитимуть по шишках, пісочку, камінцях, дереві- справжній лісовий масаж!

          </p>
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
        <Contact  /> 
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
      filter: { relativePath: { glob: "autumn_adult/fullsize/*.jpg" } }
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
