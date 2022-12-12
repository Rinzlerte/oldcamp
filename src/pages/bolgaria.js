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


import imgsafe from '../images/comfort/bolgaria/безпека.jpg';
import imgfood from '../images/comfort/bolgaria/харчування.jpg'
import imgpool from '../images/comfort/bolgaria/проживання.jpg';
import imgliving from '../images/comfort/bolgaria/територія.jpg';
import CampHero from '../components/new/CampHero'
import CampComfort from '../components/new/CampComfort'

export default class BolgariaPage extends React.Component {
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
        span: "1.SMART",
        desc:
          "Кажуть, що від морського повітря англійська засвоюється краще, а разом з Boyar Camp -результат гарантовано.На території готелю одночасно перебуватиме 450 учасників з усього світу, тому спілкування англійською стане необхідністю.    У дітей щодня буде 4 заняття англійської мови: 2 з україномовним викладачем і 2 з носієм мови. Теми занять сприятимуть розвитку критичного мислення, організованості, тренуватимемо  вміння планувати свій час, вдало реалізовувати свої таланти, вільно та правильно розмовляти англійською мовою.",
      },
      {
        span: "2. FUN",
        desc:
          "Купання у морі, сонце, вечірки під зоряним небом, звісно, ми не забуваємо про майстер-класи: розмальовування футболок, створення аксесуарів, боді арт, плетіння. Наші спортивні, танцювальні, ігрові флешмоби щодня тренуватимуть різні таланти. А ще, на наших кемперів чекає справжня мандрівка на піратському кораблі!",
      },
    ]
    const aboutCampData = [

      {
        text:
          "Boyar Camp  у Болгарії - незабутня морська англомовна пригода. У таборі ми створюємо повністю англомовне середовище, щоб діти могли практикувати розмовну англійську з носіями мови. Табір- це завжди місце для розвитку, нових корисних звичок, самостійності, спілкування, дружби, вечірок, талантів, емоцій та незабутніх пригод.",
      },
      {
        text:
          "Комфортний, якісний і безпечний відпочинок з  активним дозвіллям  у мальовничому курорті Золоті піски в готелі ZORA, що знаходиться у заповідній зоні.",
      },
    ]
    const costTitle = [
      {
        text: "Табір відбудеться 21-31 липня 2022",
        desc: "-",
      },
      {
        text: "Локацiя: Болгарія, місто Варна, готель ZORA",
        desc:
          "",
      },
      {
        text: "Вiк кемперiв: 7-17 pokiв",
        desc: "",
      },
      {
        text: "Вартість: 890 євро (26700 грн)",
        desc: "-",
      },
    ]
    const costData = [
      {
        name: "21-31 липня 2022",
        about:
          "",
        timing: "Тривалість: 10 днів",
        reservation: "",
        price: "890 євро (26700 грн)",
      },
    ]
    const comfortData = [
      {
        title: "Безпека",
        text:
          "Готель ZORA знаходиться у національному заповіднику “Золоті піски”, за 350 метрів від пляжу у кедровому лісі, подалі від шумних туристичних локацій. Територія готелю обгороджена, охороняється сучасною системою безпеки та охоронцями на в’їзді. У готелі та на подвір’ї встановлені камери відеоспостереження. У таборі працюватиме кваліфікований  лікар у медпункті та рятувальники біля басейну, а всі учасники табору будуть застраховані.",
      },
      {
        title: "Харчування",
        text:
          "Діти харчуватимуться у ресторані готелю за типом “шведський стіл”, усі страви відповідають харчовим нормам дитячого табору - свіже, здорове харчування, багато фруктів та овочів, виключено усі потенційно “небезпечні” продукти - яйця, риба. Один день на заїзд у дітей буде cheat meal - картопля фрі, нагетси і бургери з натуральними соусами. Батьки можуть вказувати свої побажання щодо харчування дитини і наші викладачі будуть контролювати тарілку дитини перед кожним прийом їжі.",
      },
      {
        title: "Готель",
        text:
          "Готель ZORA створений спеціально для дитячих таборі, тому тут дотримані усі норми проживання та харчування, перед кожним заїздом його перевіряють відповідні органи. У готелі проживатиме 400 людей з усіх країн світу, наша група з України - 45 дітей та  11 дорослих. Сучасні та комфортні номери з кондиціонерами та балконами (у кімнатах дівчат), в кожному номері проживатиме 3 дітей, поділені за віком та статтю.",
      },
      {
        title: "Море та басейн",
        text:
          "Щодня діти купатимуться у морі ( половину дня) і у басейні за поганих погодних умов чи штормового моря. Наш пляж - міський, але це околиця міста, тому він дуже просторий та малолюдний. Ми забезпечимо дітей шезлонгами і парасольками, а купаємося одразу біля поста рятувальників під наглядом викладачів, чергуючи розваги (ігри, змагання) та купання в морі, щоб діти не нудьгували на пляжі. Для дітей, які не вміють або бояться плавати буде окрема група з інструктором та жилетами.",
      },
    ]
    return (
      <CampLayout>
        <SEO 
        title="Найкращий англомовний табір в Карпатах та Болгарії" 
        description="Дитячий табір з англомовним середовищем та носіями мови у Яремче, Плаю, Болгарії та Лондоні. Організовуємо англомовні табори для дорослих та сімейні табори. Позитивні відгуки, комфортні умови, якісне харчування та кваліфіковані викладачі з англійської мови. До кінця березня діє акційна ціна- раннє бронювання!
        "
        />

          <CampHero  
            title="Найкращий англомовний табір у Болгарії"  
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
        <CampProgram  title="ПРОГРАМА ТАБОРУ"
          camp="BoyarCamp в Болгарія– це:"
          // data={programData} 
          >

            <React.Fragment>
        <div style={{margin: `0 auto`, maxWidth: `860px`}}>
          <h3>1.	Smart</h3>
          <br/>
          <p>
          Кажуть, що від морського повітря англійська засвоюється краще, а разом з Boyar Camp -результат гарантовано.На території готелю одночасно перебуватиме 450 учасників з усього світу, тому спілкування англійською стане необхідністю.
          </p>
          <br/>
          <p>
          У дітей щодня буде 4 заняття англійської мови: 2 з україномовним викладачем і 2 з носієм мови. Теми занять сприятимуть розвитку критичного мислення, організованості, тренуватимемо  вміння планувати свій час, вдало реалізовувати свої таланти, вільно та правильно розмовляти англійською мовою.
          </p>
        </div>
        <br/>
        <div style={{margin: `0 auto`, maxWidth: `860px`}}>
          <h3>2. Fun</h3>
          <br/>
          <p>
          Купання у морі, сонце, вечірки під зоряним небом, звісно, ми не забуваємо про майстер-класи: розмальовування футболок, створення аксесуарів, боді арт, плетіння. Наші спортивні, танцювальні, ігрові флешмоби щодня тренуватимуть різні таланти.
А ще, на наших кемперів чекає справжня мандрівка на піратському кораблі! 
          </p>
        </div>
        <br/>
        <div style={{margin: `0 auto`, maxWidth: `860px`}}>
          <h3>НЕОБХІДНІ ДОКУМЕНТИ </h3>
          <br/>
          <ul style={{padding: `0`, marginLeft: `30px`}}>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Свідоцтво про народження дитини
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Закордонний паспорт Дитини
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Паспорт одного із батьків
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Нотаріально затверджений дозвіл на виїзд дитини закордон
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Договір
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Путівка
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Медична довідка(079о)
            </li>
            <li style={{margin: `0`, paddingLeft: `20px`}}>
            Квитанція про оплату
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
      filter: { relativePath: { glob: "bolgaria/fullsize/*.jpg" } }
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
