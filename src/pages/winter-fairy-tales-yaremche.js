import React from "react"
import SEO from "../components/seo"
import CampLayout from "../components/CampLayout"
import Scroller from "../components/scroller"
import { graphql } from "gatsby"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import FeaturedWinterYaremche from "../components/campsSectors/FeaturedWinterYaremche"
import CampAbout from "../components/campsSectors/CampAbout"
import CampProgram from "../components/campsSectors/CampProgram"
import Contact from "../components/indexSectors/Contact"
import ComfortWinterYaremche from "../components/campsSectors/ComfortWinterYaremche"
import Partners from "../components/Partners"
import NewCost from "../components/campsSectors/NewCost"
import Img from "gatsby-image"

export default class PlaiPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
      gallery: this.props.data.images ? this.props.data.images : [],
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
        desc: "Насичені зимові канікули подарують багато радості та дивовижних спогадів!Щодня у кемперів буде 4 заняття англійської- активні та розмовні!Вечірні пргроми- ігри, змагання, квести, вечірки ( піжамна, мандрівка до Санти, 3 вечори для улюблених Різвяних фільмів, дискотеки, костюмований парад!",
      },
    ]

    const programList = [
      "На дітей чекає загадковий квест Грінча та це багато цікавих розваг!Ми покатаємося на гуцульських санах з кіньми, приготуємо 2 Різдвяні вечері: Американську та Українську,.Обов'язково будемо багато гуляти , милуватися засніженими Карпатами, збудуємо льодовий палац, покатаємося на санчатах і лижах.Зимові канікули можуть бути не менш драйвовими, ніж літні, разом з Boyar Camp!",
    ]
    const aboutCampData = [
      {
        text: "табір, де ми створюємо англомовне середовище, щоб діти могли вільно спілкуватися англійською, опанувати розмовну мову та подолати мовний бар'єр. Це унікальне місце для росту, що дозволяє дітям здобути незалежність і впевненість у собі, спілкуватися, знаходити нових друзів і навіть вчитися новим навичкам.",
      },
      {
        text: "Шість днів у курортному місті Яремче у комфортному відпочинковому комплексі Wellland , що знаходиться на вершині гори. Інтенсивна англійська у поєднанні з найкрутішими  розвагами. BoyarCamp- це чудова можливість відпочити з користю.",
      },
    ]
    const costTitle = [
      {
        text: "Дати: 2-8 січня 2022 р.",
        desc: "",
      },
      {
        text: "Локацiя: Wellland hotel (Україна, м. Яремче, вул. Івана Франка 12/1а)",
        desc: "",
      },
      {
        text: "Вiк кемперiв: 7-17 pokiв",
        desc: "",
      },
      {
        text: "Вартість:  14500",
        desc: "",
      },
    ]
    const costData = [
      {
        name: "2-8 січня 2022 р.",
        about: "Wellland hotel (Україна, м. Яремче, вул. Івана Франка 12/1а)",
        timing: "6 днів",
        reservation: "14500",
        price: "14500",
      },
    ]
    const comfortData = [
      {
        title: "Безпека",
        text: "Ми забезпечуємо комплексну безпеку Ваших дітей. Закрита територія з охороною та відеонаглядом, постійний нагляд за дітьми, контроль продуктів харчування та умов проживання, організація гігієни та охорони здоров'я. Усі учасники табору застраховані.",
      },
      {
        title: "Харчування",
        text: "На сніданок діти зможуть вибрати собі зі шведського столу різноманітні страви, фрукти та овочі. На обід і вечерю їм подаватимуть перші та другі страви з м’ясом, овочами. Харчування у ресторані —тричі на день. Також о 21:00 є додатковий перекус: солодощі, фрукти, соки, чай, какао, печиво. Також ми враховуємо індивідуальні побажання батьків:алергії на певні харчі, вегетаріанське та безлактозне меню. У ресторані готелю складене меню, спеціально для дітей шкільного віку.",
      },
      {
        title: "Проживання",
        text: "Діти живуть в основному  корпусі: окремо хлопці та дівчата, відповідно до віку. У кожному корпусі — 2, 3, 4-місні готельні номери зі зручностями. У кімнатах — односпальні та двоспальні ліжка, килимове покриття, телевізор, дерев’яні меблі, душ, туалет, фен та змінні рушники.Діти живуть по 2,3 у кімнаті, залежно від віку, статі та побажань.",
      },
      {
        title: "Активності",
        text: "Незабутня атмосфера зимових Карпат та гуцульського Різдва ( вражаюче видовище). Ми додамо Американське та отримаємо обмін культурним досвідом, разом з англомовним середовищем. І зимові розваги: катання на санях, сніжкові батли, екскурсія Яремчанськими базарчиком.",
      },
    ]
    return (
      <CampLayout>
        <SEO title="Winter fairy tales ЯРЕМЧЕ" />
        <FeaturedWinterYaremche
          title="Winter fairy tales - ЯРЕМЧЕ"
          text="ДИТЯЧИЙ АНГЛОМОВНИЙ ТАБІР В КАРПАТАХ"
        />

        <CampAbout title="Про табір" data={aboutCampData} />
        <NewCost data={costData} costTitle={costTitle} />
        <section>
          <div className="page-section-wrapper">
          <div style={{margin: `0 auto`, marginBottom: `48px`, maxWidth: `960px`}}>
              <p>
                Зимові Карпати, Американське й Українське Різдво, справжня
                святкова магія, незабутні емоції і все це англійською мовою. Це
                справжня англомовна пригода-найкращий шанс спілкуватися вільно!
              </p>
              <p>
                Насичені зимові канікули подарують багато радості та дивовижних
                спогадів! Щодня у кемперів буде 4 заняття англійської- активні
                та розмовні!
              </p>
              <p>
                Вечірні програми- ігри, змагання, квести, вечірки ( піжамна,
                мандрівка до Санти, 3 вечори для улюблених Різдвяних фільмів,
                дискотеки, костюмований парад!
              </p>

              <p>
                На дітей чекає загадковий квест Грінча та це багато цікавих
                розваг!
              </p>
              <p>
                Ми покатаємося на гуцульських санях з кіньми, приготуємо 2
                Різдвяні вечері: Американську та Українську,.
              </p>
              <p>
                Обов'язково будемо багато гуляти , милуватися засніженими
                Карпатами, збудуємо льодовий палац, покатаємося на санчатах і
                лижах.
              </p>
              <p>
                Зимові канікули можуть бути не менш драйвовими, ніж літні, разом
                з Boyar Camp!
              </p>
            </div>
          </div>
        </section>
        <ComfortWinterYaremche
          title="Комфортний відпочинок"
          data={comfortData}
        />
        <CampProgram
          title="ПРОГРАМА ТАБОРУ"
          camp="BoyarCamp в Winter fairy tales / ЯРЕМЧЕ – це:"
          data={programData}
          list={programList}
        />

        <section className="page-section" id="portfolio">
          <div className="page-section-wrapper" id="gallery">
            <div className="title_box">
              <h2 className="text-center">ГАЛЕРЕЯ</h2>
            </div>
            {this.props.data.images && (
              <div className="row no-gutters" style={{ marginTop: `20px` }}>
                {this.state.gallery.edges.map((item, index) => {
                  return (
                    <div
                      className="col-lg-4 col-sm-6"
                      style={{ marginBottom: `20px` }}
                      key={index}
                    >
                      <div
                        style={{
                          width: `96%`,
                          height: `100%`,
                          margin: `0 auto`,
                        }}
                      >
                        <a
                          className="portfolio-box"
                          href="#"
                          onClick={this.handlePortfolioClick.bind(this, index)}
                        >
                          <Img fluid={item.node.childImageSharp.fluid} />
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </section>
        {this.props.data.images && (
          <PortfolioModal
            show={this.state.modalShow}
            onHide={() => this.setModal(false, 0)}
          >
            <PortfolioCarousel
              images={this.props.data.images.edges}
              current={this.state.modalCurrent}
            />
          </PortfolioModal>
        )}
        <Contact title=" КОНТАКТИ" />
        <Partners />
      </CampLayout>
    )
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "yaremchewinter/fullsize/*.jpg" } }
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
