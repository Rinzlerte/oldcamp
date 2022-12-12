import React from "react"
import SEO from "../components/seo"
import CampLayout from "../components/CampLayout"
import Scroller from "../components/scroller"
import { graphql } from "gatsby"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import FeaturedWinterLviv from "../components/campsSectors/FeaturedWinterLviv"
import CampAbout from "../components/campsSectors/CampAbout"
import CampProgram from "../components/campsSectors/CampProgram"
import Contact from "../components/indexSectors/Contact"
import ComfortWinterLviv from "../components/campsSectors/ComfortWinterLviv"
import Partners from "../components/Partners"
import NewCost from '../components/campsSectors/NewCost'
import Img from 'gatsby-image'


export default class PlaiPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
      gallery : this.props.data.images ? this.props.data.images : []
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
        span: "Навчальна програма",
        desc:
          "Окрім розваг та неймовірної атмосфери ми гарантуємо практику живої англійської мови non-stop. Незмінними у нас є 4 уроки англійської, цьогоріч- поєднуємо вивчення проблемних граматичних тем й історії успіху з Ted-x, лексику для щоденного спілкування з необхідними фразами для самопрезентації.",
      },
      {
        span: "Розваги",
        desc:
          "Цей табір-це справжній вибух казкових емоцій!  Ми відвідаємо найвідоміші туристичні локації старого Львова: Палац графів Потоцьких, Оперний театр, Ратуша, Львівська пивоварня, Костели Ольги та Єлизавети і Латинська катедра, Львівські підземелля, Високий замок, Королівський музей!Зимові канікули- це також час розваг: катання та тюбах, санах, сніжки, рухливі змагання- багато часу на свіжому повітрі-те, чого так бракувало в онлайні.Звичайно, ми приготували ще майстер-класи: створення цукерок в Майстерні карамелі, розфарбовування пряників.",
      },
    ]

    const programList = [];
    const aboutCampData = [
      {
        text:
        "Boyar Camp – табір, це чудова можливість познайомитися з Різдвяним Львовом: гостинним, метушливим, святковим, сповненим світла,сміху і віри в дива, ми гарантуємо незабутню зимову казку з користю. На дітей чекає справді казковий тиждень!",
      },
      {
        text:
          "Ми відвідаємо найвідоміші туристичні локації старого Львова: Палац графів Потоцьких, Оперний театр, Ратуша, Львівська пивоварня, Костели Ольги та Єлизавети і Латинська катедра, Львівські підземелля ( Гарнізонний храм, Копальня кави, Аптека-музей), Високий замок, Королівський музей!",
      },
      {
        text:
          "Зимові канікули- це також час розваг: катання та тюбах, санах, сніжки, рухливі змагання- багато часу на свіжому повітрі-те, чого так бракувало в онлайні.",
      },
      {
        text:
          "Звичайно, ми приготували ще майстер-класи: створення цукерок в Майстерні карамелі, розфарбовування пряників, новорічні кулі, квілінг, алмазна мозаїка та ще багато цікавинок: тематичні вечірки фотосесія, вечері в найвідоміших Львівських ресторанах, змагання, ігри, та нові друзі зі всієї України!",
      }
    ]
    const costTitle = [
      {
        text: "Дати: 25 - 30 грудня 2021 року",
        desc: "",
      },
      {
        text: "Локацiя: Різдвяний Львів",
        desc:
          "",
      },
      {
        text: "Вiк кемперiв: 7-17 pokiв",
        desc: "",
      },
      {
        text: "Вартість: 11500 цілодобовий, 7500- денний (9:00-21:00)",
        desc: "",
      },
    ]
    const costData = [
      {
        name: "25 - 30 грудня 2021 року",
        about:
          "Різдвяний Львів",
        timing: "6 днів",
        reservation: "11500 цілодобовий, 7500- денний (9:00-21:00)",
        price: "11500 цілодобовий, 7500- денний (9:00-21:00)",
      },
    ]
    const comfortData = [
      {
        title: "Проживання",
        text:
          "Діти проживатимуть у хостелі - Coffe house. Затишна простора кімната на 6 місць (5 дітей+1 викладач).  Це незабутній досвід проживання- таборовий формат і багато спілкування у маленькій затишній групі під контролем викладача. Хостел розташований у самому серці Львова- на вулиці Театральній, з вікна номеру видно Гарнізонний храм Петра і Павла, це тихий закуток старого центру Львова з шумоізоляцією в номері, тому сон буде чудовим після насиченого дня.",
      },
      {
        title: "Харчування",
        text:
          "Щоб краще відчути колорит міста- діти харчуватимуться у різних закладах нашого міста. Сніданки діти зможуть обирати із запропонованих - 2-3 позицій, обіди-комплексні, а вечері у найращих тематичніх Львівських ресторанах ( Бачевських, Дуже висока кухня, П’яте підземелля, Борщ, Лівий берег, Криївка). Є можливість вегетеріанського і безлактозного харчування.",
      },
      {
        title: "Безпека",
        text:
          "Ми формуємо малу групу - 5 дітей +1 викладач з міркувань безпеки та для комфорту пересування, адже це чудова компанія для майстер-класів та відвідування закладів. Усі діти застраховані та за потреби ми звертатимемося до педіатра.Також ми будемо використовувати засоби дезинфекції, маски, а усі наші педагоги вакциновані.",
      },
      {
        title: "Активності",
        text:
          "Ми запланували дуже насичену програму для дітей: екскурсії, квести, майстер-класи, щоденне перебування на свіжому повітрі до 3 годин (не поспіль). Ми будемо кататися на тюбах, санчатах, будувати снігові фортеці та це багато цікавого. ",
      },
    ]
    return (
      <CampLayout>
        <SEO title="Winter fairy tales Львів" />
        <FeaturedWinterLviv
          title="Winter fairy tales - Львів"
          text="ДИТЯЧИЙ АНГЛОМОВНИЙ ТАБІР"
        />

        <CampAbout title="Про табір" data={aboutCampData} />
        <NewCost     data={costData}  costTitle={costTitle} />
        <ComfortWinterLviv title="Комфортний відпочинок" data={comfortData} />
        <CampProgram
          title="ПРОГРАМА ТАБОРУ"
          camp="BoyarCamp в Winter fairy tales / Львів – це:"
          data={programData}
          list={programList}
        />
        <section className="page-section" id="portfolio">
          <div className="page-section-wrapper" id="gallery">
            <div className="title_box">
              <h2 className="text-center">ГАЛЕРЕЯ</h2>
            </div>

            { this.props.data.images && (
              <div className="row no-gutters" style={{ marginTop: `20px` }}>
                {
                  this.state.gallery.edges.map((item, index)=>{
                    return (
                      <div
                        className="col-lg-4 col-sm-6"
                        style={{ marginBottom: `20px` }}
                        key={index}
                      >
                        <div style={{ width: `96%`, height: `100%`, margin: `0 auto` }}>
                          <a
                            className="portfolio-box"
                            href="#"
                            onClick={this.handlePortfolioClick.bind(this, index)}
                          >
                            <Img
                              fluid={item.node.childImageSharp.fluid}
                            />
                          </a>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )}
          </div>
        </section>
        {

        this.props.data.images &&         
          <PortfolioModal
            show={this.state.modalShow}
            onHide={() => this.setModal(false, 0)}
          >
          <PortfolioCarousel
            images={ this.props.data.images.edges}
            current={this.state.modalCurrent}
          />
          </PortfolioModal>

        }

        <Contact title=" КОНТАКТИ" />
        <Partners />
      </CampLayout>
    )
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "lvivwinter/fullsize/*.jpg" } }
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
