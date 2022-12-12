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
import imgsafe from '../images/comfort/london/проживання.jpg';
import imgfood from '../images/comfort/london/харчування.png'
import imgpool from '../images/comfort/london/екскурсії.jpg';
import imgliving from '../images/comfort/london/безпека.jpg';
import CampComfort from '../components/new/CampComfort'

export default class LondonPage extends React.Component {
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
          "Комфортна група- 5-8 дітей і двоє викладачів. Спілкування живою англійською Страхування життя та здоров'я дитини Постійний зв’язок з викладачем. Щоденні фото, відео звіти та щасливі очі Вашої дитини!",
      }
     
    ]
    const aboutCampData = [

      {
        text:
          "Boyar Camp  розширює кордони і цього разу ми їдемо в Лондон GB",
      },
      {
        text:
          "Ми відвідаємо найвідоміші історичні пам'ятки на знаменитому лондонському автобусі, покатаємося на легендарному колесі огляду, відвідаємо Оксфорд, національні музеї та відправимось на шопінг.",
      },
      {
        text:
          "Діти житимуть у хостеліу центральному районіЛондона. Важливо, що у кімнаті з нашими кемперами не буде незнайомців. Хостел буде заброньовано після формування групи. З учасниками табору 24/7 перебуватимуть наші викладачі.",
      },
      {
        text:
          "А щоб краще відчути атмосферу міста, ми щодня будемо харчуватися у різних закладах,(фаст-фуд, тематичні кафе, навіть відвідаємо паб Чарльза Діккенса)",
      },
      {
        text:
          "І унікальною можливістю цієї мандрівки буде відвідування виставки освітніх технологій. Це найграндіозніший освітній захід у світ, куди приїжджають представники усіх країн, презентують новітні винаходи для навчання та розвитку, розповідають про свій досвід. В одному місці діти побачать, як живуть і вчаться їхні ровесники у цілому світі.",
      }
     
    ]
    const costTitle = [
      {
        text: "Табiр вiдбудеться: : 23.05-27.05",
        desc: "-",
      },
      {
        text: "Локацiя: Об’єднане королівство Британії, Лондон",
        desc:
          "",
      },
      {
        text: "Вiк кемперiв: 10-17 pokiв",
        desc: "",
      },
      {
        text: "1450 доларів + 150 доларів (консульський збір)",
        desc: "-",
      },
    ]
    const costData = [
    ]
    const comfortData = [
      {
        title: "Проживання",
        text:
          "Діти житимуть у хостелі у центральному  районі Лондона.Важливо, що у кімнаті з нашими кемперами не буде незнайомців Хостел буде заброньовано після формування групи. З учасниками табору 24/7 перебуватиме викладач",
      },
      {
        title: "Харчування",
        text:
          "Щоб краще відчути атмосферу міста, ми щодня будемо харчуватися у різних закладах,( і фаст-фуд і тематичні кафе, навіть відвідаємо паб Чарльза Діккенса.",
      },
      {
        title: "Екскурсії",
        text:
          "Ми відвідаємо найвідоміші історичні пам'ятки на знаменитом лондонському автобусі: Big Ben, Buckingham Palace (церемонія зміни караулу),the Houses of Parliament,Tower Bridge and the Tower of London, famous streets and square.",
      },
  
      {
        title: "Безпека",
        text:
          "Усі діти застраховані, цілодобово знаходитимуться під наглядом викладачів у комфортній групі 8-10 дітей. Вчитель буде цілодобово на зв’язку з батьками та надсилатиме щоденні фотозвіти.",
      },
    
    ]




    return (
      <CampLayout>
        <SEO title="Дитячий англомовний табір BOYARCAMP у Лондоні" description="Дитячий англомовний табір-мандрівка у Лондоні - BOYARCAMP" />
      
        <CampHero  
          title="London Weekend"
         />
        <CampAbout title="Про табір" data={aboutCampData} />
        <NewCost     data={costData}  costTitle={costTitle} />
        <CampComfort  
            title="Комфортний відпочинок"  
            s1title={comfortData[0].title}
            s1description={comfortData[0].text}
            s2title={comfortData[1].title} 
            s2description={comfortData[1].text}
            s3title={comfortData[2].title}
            s3description={comfortData[2].text}
            s4title={comfortData[3].title}
            s4description={comfortData[3].text}
            img1={imgsafe}
            img2={imgfood}
            img3={imgpool}
            img4={imgliving}
        />
        <CampProgram
          title="ПРОГРАМА ТАБОРУ"
          camp="BoyarCamp London Weekend– це:"
          data={programData}
        />
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
      filter: { relativePath: { glob: "london/fullsize/*.jpg" } }
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
