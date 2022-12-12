// import React from "react"
// import SEO from "../components/seo"
// import CampLayout from "../components/CampLayout"
// import Scroller from "../components/scroller"
// import { graphql } from "gatsby"
// // import PortfolioModal from "../components/portfolio/modal"
// // import PortfolioCarousel from "../components/portfolio/carousel"
// import FeaturedWinterPlai from "../components/campsSectors/FeaturedWinterPlai"
// import CampAbout from "../components/campsSectors/CampAbout"
// import CampProgram from "../components/campsSectors/CampProgram"
// import Contact from "../components/indexSectors/Contact"
// import ComfortWinterPlai from "../components/campsSectors/ComfortWinterPlai"
// import Partners from "../components/Partners"
// import NewCost from '../components/campsSectors/NewCost'


// export default class PlaiPage extends React.Component {
//   constructor(props) {
//     super(props)
//     Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
//     this.state = {
//       modalShow: false,
//       modalCurrent: 0,
//     }
//     this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
//     this.setModal = this.setModal.bind(this)
//   }

//   handlePortfolioClick(index, e) {
//     e.preventDefault()
//     this.setModal(true, index)
//   }

//   setModal(isShown, current) {
//     this.setState({
//       modalShow: isShown,
//       modalCurrent: current,
//     })
//   }

//   render() {
//     const programData = [
//       {
//         span: "Програма",
//         desc:
//           "Шість днів у гірськолижному комплексі Плай серед засніжених Карпатських гір. Інтенсивна англійська у поєднанні з найкрутішими зимовими розвагами. BoyarCamp- це чудова можливість відпочити з користю.",
//       },
//     ]

//     const programList = [
//      "- Катання на лижах",
//      "-Інтерактивна англійська (Critical Thinking)",
// "-Критий басейн",
// "- Змагання, футбол, волейбол у спортивному комплексі з олімпійськими стандартами",
// "- Дискотеки",
// "- Піжамна вечірка",
// "- Кіноніч",
// "-Караоке",
// "- Майстер-класи",
// "Та ще безліч цікавинок;)",

//     ]
//     const aboutCampData = [
//       {
//         text:
//           "Boyar Camp – табір, де ми створюємо англомовне середовище, щоб діти могли вільно спілкуватися англійською, опанувати розмовну мову та подолати мовний бар'єр. Це унікальне місце для росту, що дозволяє дітям здобути незалежність і впевненість у собі, спілкуватися, знаходити нових друзів і навіть вчитися новим навичкам.",
//       },
//       {
//         text:
//           "Цього року Boyar Camp додав ще одну круту нову локацію - комплекс «Плай» який знаходиться у с. Плав’є, Львівська область. Інтенсивна англійська у поєднанні з найкрутішими зимовими розвагами. BoyarCamp- це чудова можливість відпочити з користю.",
//       },
//       {
//         text:
//           "На території комплексу «Плай» для наших кемперів працюють: критий басейн, спа, боулінг, більярд, дитяча кімната дискотека, спортивний центр.",
//       },
//       {
//         text:
//           "А головною фішкою комплексу є власний лижний комплекс- лижна школа, наві та надійні витяги, якісне спорядження- все для крутого катання для новачків та профі.",
//       },
//       {
//         text:
//           "Ми хочемо щоб відпочинок Ваших дітей був наповнений враженнями та спогадами. Відпочинок , який проходить у атмосфері казки в поєднанні з захоплюючими відчуттями та емоціями у неймовірних краєвидах недоторканої Карпатської природи.",
//       },
//     ]
//     const costTitle = [
//       {
//         text: "Дати: 10-16 січня 2021 року",
//         desc: "",
//       },
//       {
//         text: "Локацiя: Україна с. Плав’є, Сколівський р-н, Львівська область. (траса Київ-Чоп)",
//         desc:
//           "",
//       },
//       {
//         text: "Вiк кемперiв: 7-17 pokiв (є можливість поселення для батьків та сімей)",
//         desc: "",
//       },
//       {
//         text: "Вартість: 18500 грн (знижки визначаються індивідуально).",
//         desc: "",
//       },
//     ]
//     const costData = [
//       {
//         name: "10-16 січня 2021 року",
//         about:
//           "с. Плав’є, Сколівський р-н, Львівська область. (траса Київ-Чоп)",
//         timing: "6 днів",
//         reservation: "18500 грн",
//         price: "18500 грн",
//       },
//     ]
//     const comfortData = [
//       {
//         title: "Безпека",
//         text:
//           "Ми забезпечуємо комплексну безпеку Ваших дітей. Закрита територія з охороною та відеонаглядом, постійний нагляд за дітьми, контроль продуктів харчування та умов проживання, організація гігієни та охорони здоров'я. На території табору постійно перебуває лікар-педіатр, травматолог. Ми обов’язково страхуємо наших кемперів. Ви цілодобово зможете контактувати з викладачем а також будете отримувати щоденний фотозвіт у ТГ каналі.",
//       },
//       {
//         title: "Харчування",
//         text:
//           "На сніданок діти зможуть вибрати собі зі шведського столу різноманітні страви, фрукти та овочі. На обід і вечерю їм подаватимуть перші та другі страви з м’ясом, овочами. Харчування у ресторані —тричі на день. Також о 21:00 є додатковий перекус: солодощі, фрукти, соки, фреші, печиво. Також ми враховуємо індивідуальні побажання батьків:алергії на певні харчі, вегетаріанське та безлактозне меню. У ресторані готелю складене меню, спеціально для дітей",
//       },
//       {
//         title: "Лижі",
//         text:
//           "На території гірськолижного комлексу розташовані витяги, протяжність найдовшого з яких становить 1200 м, перепад висот сягає 260 м. Прокладені гірськолижні траси як для досвідчених лижників, так і для початківців. 5 спускових трас (за складністю 3 червоні траси (середнього рівня), 2 сині (легкі) та чорні у верхній частині гори (складні). Для підйому використовуються підйомники фірми Doppelmayar довжиною близько 1 км. Діти навчатимуться у Лижній школі з професійними тренерами, щодня 2 години занять з тренером,перерва на теле какао з пряником, і ще 2 години катання. У вартість путівки входить оренда спорядження, якщо у вас є свої лижі, палки, окуляри- ми віднімаємо  1000 грн від вартості.",
//       },
//       {
//         title: "Проживання",
//         text:
//           "Діти живуть у одному корпусі готелю Плай, окремо хлопці та дівчата, відповідно до віку. У корпусі 2-місні готельні номери зі зручностями. У кімнатах — односпальні та двоспальні ліжка, килимове покриття, телевізор, дерев’яні меблі, душ, туалет, фен та змінні рушники.",
//       },
//     ]
//     return (
//       <CampLayout>
//         <SEO title="Зимовий Плай" />
//         <FeaturedWinterPlai
//           title="Зимовий(Плай)"
//           text="ДИТЯЧИЙ АНГЛОМОВНИЙ ТАБІР В КАРПАТАХ"
//         />

//         <CampAbout title="Про табір" data={aboutCampData} />
//         <NewCost     data={costData}  costTitle={costTitle} />
//         <ComfortWinterPlai title="Комфортний відпочинок" data={comfortData} />
//         <CampProgram
//           title="ПРОГРАМА ТАБОРУ"
//           camp="BoyarCamp в Зимовий(Плай) – це:"
//           data={programData}
//           list={programList}
//         />
//         <section className="page-section" id="portfolio">
//           <div className="page-section-wrapper" id="gallery">
//             <div className="title_box">
//               <h2 className="text-center">ГАЛЕРЕЯ</h2>
//             </div>
//           </div>
//         </section>
//         <Contact title=" КОНТАКТИ" />
//         <Partners />
//       </CampLayout>
//     )
//   }
// }

// export const imageData = graphql`
//   query {
//     images: allFile(
//       filter: { relativePath: { glob: "winter/fullsize/*.jpg" } }
//       sort: { fields: name }
//     ) {
//       edges {
//         node {
//           childImageSharp {
//             fluid(maxWidth: 550) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
