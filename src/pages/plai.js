import React from "react"
import SEO from "../components/seo"
import CampLayout from "../components/CampLayout"
import Scroller from "../components/scroller"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import FeaturedPlai from "../components/campsSectors/FeaturedPlai"
import CampAbout from "../components/campsSectors/CampAbout"
import CampProgram from "../components/campsSectors/CampProgram"
import NewCost from '../components/campsSectors/NewCost'
import Contact from "../components/indexSectors/Contact"
import ComfortPlai from "../components/campsSectors/ComfortPlai"
import Partners from "../components/Partners"


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
          "Десять днів у гірськолижному комплексі Плай серед Карпатських гір. Інтенсивна англійська у поєднанні з найкрутішими літніми розвагами. BoyarCamp- це чудова можливість відпочити з користю. Усіх учасників ми розподіляємо на підгрупи відповідно до їхнього рівня англійської та віку. В одній групі- 16 дітей та двоє викладачів: україномовний викладач Смарт простору Бояр та носій мови. Заняття проходять в інтерактивній формі з використанням новітніх методик викладання. За умови хорошої погоди - в альтанках на вулиці, біля басейну, якщо дощить – в ігрових кімнатах, ресторані та конференц-залі.",
      },
      {
        span: "Розважальна програма",
        desc:
          "Друга половина кожного дня присвячена розвагам: екскурсії, квести, змагання, спортивні ігри, майстер-класи, воркшопи, тематичні вечірки, басейн, дискотеки, караоке, кіно... Особливістю є те, що усі види дозвілля проводяться лише англійською мовою.",
      },
    ]
    const aboutCampData = [

      {
        text:
          "Boyar Camp – табір, де ми створюємо англомовне середовище, щоб діти змогли опанувати розмовну мову та подолати мовний бар'єр.",
      },
      {
        text:
          "Минулого року Boyar Camp додав ще одну круту нову локацію - комплекс «Плай» який знаходиться у с. Плав’я, Львівська область. «Плай» – це не тільки відпочинок у мальовничих Карпат, а й багато  можливостей для навчання, активного, спортивного, і навіть екстремального відпочинку і все це англійською мовою.",
      },
      {
        text:
          "На території комплексу «Плай» для наших кемперів працюють боулінг, більярд, дитяча кімната дискотека, спортивний центр.",
      },
      {
        text:
          "Ми хочемо щоб відпочинок Ваших дітей був наповнений враженнями та спогадами.",
      },
     
    ]
    const costTitle = [
      {
        text: "Табiр вiдбудеться: 20.06-30.06",
        desc: "-",
      },
      {
        text: "Локацiя: Україна с. Плав’є, Сколівський р-н, Львівська область. (траса Київ-Чоп)",
        desc:
          "",
      },
      {
        text: "Вiк кемперiв: 7-17 pokiв",
        desc: "",
      },
      {
        text: "Раннє бронювання до 31 березня: : 26 500 грн",
        desc: "-",
      },
    ]
    const costData = [
      {
        name: "1 Заїзд (20.06-30.06)  Maker Camp",
        about:
          "Літо- час неймовірних відкриттів! Твори і не зупиняйся, спілкуйся англійською вільно та впевнено! У цьому заїзді кожен знайде для себе щось цікаве і нове, адже це мікс найпопулярніших тем, а ми перетворили його у майстерню проєктів. Переваги: англійська на різні суспільні і побутові теми, розвиток креативного та раціонального мислення.",
        timing: "Екскурсії: овеча ферма-сироварня",
        reservation: "",
        price: "",
      },
    ]
    const comfortData = [
      {
        title: "Безпека",
        text:
          "Ми забезпечуємо комплексну безпеку Ваших дітей. Закрита територія з охороною та відеонаглядом, постійний нагляд за дітьми, контроль продуктів харчування та умов проживання, організація гігієни та охорони здоров'я. На території табору постійно перебуває лікар-педіатр.",
      },
      {
        title: "Харчування",
        text:
          "На сніданок діти зможуть вибрати собі зі шведського столу різноманітні страви, фрукти та овочі. На обід і вечерю їм подаватимуть перші та другі страви з м’ясом, овочами. Харчування у ресторані —тричі на день. Також о 21:00 є додатковий перекус: солодощі, фрукти, соки, фреші, печиво. Також ми враховуємо індивідуальні побажання батьків:алергії на певні харчі, вегетаріанське та безлактозне меню. У ресторані готелю складене меню, спеціально для дітей шкільного віку.",
      },
      {
        title: "Басейн",
        text:
          "На території комплексу Плай  є є 2 відкриті басейни: основний басейн (30 х 15), басейн для плавання, басейн для стрибків та спеціально для наймолодших відвідувачів створено дитяче містечко та басейн. Вода в басейнах постійно підігрівається до комфортної температури, завжди очищується і оновлюється через фільтри. Діти зможуть купатися в басейні у відведений час під наглядом викладачів",
      },
      {
        title: "Проживання",
        text:
          "Діти живуть у одному корпусі готелю Плай, окремо хлопці та дівчата, відповідно до віку. У корпусі 2-місні готельні номери зі зручностями. У кімнатах — односпальні та двоспальні ліжка, килимове покриття, телевізор, дерев’яні меблі, душ, туалет, фен та змінні рушники.",
      },
    ]
    return (
      <CampLayout>
        <SEO title="Плай" />
        <FeaturedPlai
          title="ПЛАЙ"
          text="ДИТЯЧИЙ АНГЛОМОВНИЙ ТАБІР В КАРПАТАХ"
        />
        <CampAbout title="Про табір" data={aboutCampData} />
        {/* <Cost
          title="ЦІНА ТА ДАТИ ЗАЇЗДУ"
          costTitle={costTitle}
          tabledata={costData}
        /> */}
        <NewCost     data={costData}  costTitle={costTitle} />
        <ComfortPlai title="Комфортний відпочинок" data={comfortData} />
        <CampProgram
          title="ПРОГРАМА ТАБОРУ"
          camp="BoyarCamp в ПЛАЙ – це:"
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
      filter: { relativePath: { glob: "plai/fullsize/*.jpg" } }
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
