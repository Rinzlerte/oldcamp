import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

import SEO from "../components/seo"
import CampLayout from "../components/CampLayout"
import Scroller from "../components/scroller"

import CampAbout from "../components/campsSectors/CampAbout"
import CampProgram from "../components/campsSectors/CampProgram"
import NewCost from '../components/campsSectors/NewCost'
import ComfortYaremche from "../components/campsSectors/ComfortYaremche"
import Contact from "../components/indexSectors/Contact"
import FeaturedYaremche from "../components/campsSectors/FeaturedYaremche"

import Partners from "../components/Partners"

export default class YaremchePage extends React.Component {
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
    const programData =[
      {
        "span": "Програма",
        "desc": "Десять днів у курортному місті Яремче серед Карпатських гір. Інтенсивна англійська у поєднанні з найкрутішими літніми розвагами. BoyarCamp- це чудова можливість відпочити з користю. Усіх учасників ми розподіляємо на підгрупи відповідно до їхнього рівня англійської та віку. Заняття проходять в інтерактивній формі з використанням новітніх методик викладання. За умови хорошої погоди - в альтанках на вулиці, біля басейну, на столиках в лісі (який включений в територію комплексу), якщо дощить – в ігрових кімнатах, лаундж-зоні та конференц-залі."
      },
      {
        "span": "Розважальна програма",
        "desc": "Друга половина кожного дня присвячена розвагам: екскурсії (Буковель, водоспади, гора Маковиця, місто Яремче з колоритним базарчиком та зоопарком, скелі Довбуша), квести, змагання, спортивні ігри, майстер-класи, воркшопи, тематичні вечірки, басейн, лазер таг, катання на конях, сплав по річці, дискотеки, поїздки на квадроциклах, тур походи та поїздки на велосипедах, караоке, кіно... Особливістю є те, що усі види дозвілля проводяться лише англійською мовою."
      },
      {  
        "span": "ПОХОДИ",
        "desc": "Буковель, Водоспад «Дівочі сльози» та Пробій, місто Яремче з колоритним базарчиком, Вольєрне господарство Карпатського НПП,Полонина Перців, рафтинг у селі Дземброня, катання на конях по Чорногірському хребту, підйом на Говерлу, Манявський скит, Пнівський замок, водоспад Труфанець"},
      { 
        "span": "ЕКСКУРСІЇ",
        "desc": "Усі види дозвілля проводяться виключно англійською мовою. Впродовж одного заїзду ми тричі виїжджаємо за територію готелю одним із зазначених маршрутів, зважаючи на погодні умови."
      },
    ];
    const aboutCampData = [
      { "text": "Boyar Camp – табір, де ми створюємо англомовне середовище, щоб діти могли вільно спілкуватися англійською, опанувати розмовну мову та подолати мовний бар'єр. Це унікальне місце для росту, що дозволяє дітям здобути незалежність і впевненість у собі, спілкуватися, знаходити нових друзів і навіть вчитися новим навичкам."},
      { "text": "Десять днів у курортному місті Яремче у комфортному відпочинковому комплексі Wellland , що знаходиться на вершині гори. Інтенсивна англійська у поєднанні з найкрутішими літніми розвагами. BoyarCamp- це чудова можливість відпочити з користю."},
      { "text": "Кожен заїзд є тематичним, відповідно до теми заїзду ми обираємо розваги і складаємо власну навчальну програму, і не забуваємо, що це канікули, тому буде весело!"}
    ];
    const costTitle = [
      {
          "text": "Табір відбудеться 1.07-10.07;  10.07-20.07" ,
          "desc": "-"
      },
      {
          "text": "Локацiя: Україна, м. Яремче, вул. Івана Франка 12/1а" ,
          "desc": ""
      },
      {
          "text": "Вiк кемперiв: 7-17 pokiв" ,
          "desc": ""
      },
      {
          "text": "Раннє бронювання 18500/22500" ,
          "desc": ""
      },
    ]
    const  costData = [
      {
        "name" : "2 Заїзд (1.07-10.07) American Camp",
        "about" :"Наш найпопулярніший заїзд! Щодня у нас нове Американське свято: розпочинає за календарем з Нового Року, влітку- це дуже весело.На заняттях ми поговоримо про традиції святкування, а пообіді влаштуємо справжнє свято: з костюмами, пригощеннями, розвагами, і так щодня. Діти працюватимуть у команді, знайдуть нових друзів та практикуватимуть англійську нон-стоп!" ,
        "timing": "Екскурсії: Буковель ( підйомники), Вольєрне господарство у Яремче, босонога тактильна стежка, водоспад Дівочі сльози, підйом на гору Маковицю та дегустація овечих сирів у старовинній сироварні на вершині, похід на на річку. Майстер-класи: 3д конструктори, творчий мейк-грим, розмальовування пряників, алмазна мозаїка, наукові експерименти, гончарство",
        "reservation":"Розваги: Лазер-таг, катання на квадроциклах, бал до дня Святого Валентина, квест до Дня святого Патріка, Олімпійські ігри, Гавайська вечірка, пошуки Пасхального кролика, моторошна вечірка Хелоувін та ще багато незабутніх розваг.",
        "price":"" 
      },
      {
        "name" : "3 Заїзд (1.07-10.07) Trends camp",
        "about" :"Сучасний світ щодня створює нові тренди у різних сферах, щоб бути в курсі всіх подій ми створили загально пізнавальну програму, це хороший шанс прокачати «найсвіжішу» англійську. Але, головною родзинкою цього заїзду є повністю оновлена програма екскурсій та розваг!" ,
        "timing": "Спеціально для наших постійних кемперів: НІЯКИХ ДІВОЧИХ СЛІЗ! Жодна гра чи конкурс не повториться.Незмінними залишається: англійська,крута атмосфера, фантастичні краєвиди! Екскурсії: Мандрівка у високогірні села України: Криворівня, Кривопілля, Верховина, музей гуцульської магії, гуцульська гражда і дідова аптека, похід на Говерлу, рафтинг на Чорному Черемоші",
        "reservation":"Майстер-класи: стрінг-арт, малювання по номерах, Мейдо кафе, створення іграшок-антистресів, створення соєвих ароматизованих свічок. Розваги: окуляри віртуальної реальності, показ мод, створення власних ігор за принципом Roblox, еко-квест, зйомки власного фільму та ще чудові розваги.",
        "price":"" 
      },
      {
        "name" : "4 Заїзд (20.07-30.07) Digital camp |  SOLD OUT!",
        "about" :"Віртуальний світ стає реальним! Дізнаємося історії створення технологічних гігантів і спробуємо створити свій start up за 10 днів, дізнаємося як працює тік-ток і будемо в топі. Нас чекають неймовірні англомовні пригоди у світ техніки і програмування;)" ,
        "timing": "Екскурсії: річка(смаження хот-догів), гора Маковиця (дегустація овечих сирів), Буковель ( підйомники), Полонина Перців. ( там катання на конях і екскурсія в гуцульську ґражду).",
        "reservation":"Розваги: Лазертаг, квадроцикли, коні(на полонині перців), окуляри VR, квест, професійна фотосесія і мк по обробці фото і позуванні. Майстер-класи: розмальовування гіпсових лого, створення костюмів-роботів, розмальовування пряників, 3д конструктори, малювання на тканині (аксесуар).",
        "price":"" 
      }
     
    ];
    const comfortData = [
      {
        "title": "Безпека",
        "text" :"Ми забезпечуємо комплексну безпеку Ваших дітей. Закрита територія з охороною та відеонаглядом, постійний нагляд за дітьми, контроль продуктів харчування та умов проживання, організація гігієни та охорони здоров'я. На території табору постійно перебуває лікар-педіатр."
      },
      {
        "title": "Харчування",
        "text" :"На сніданок діти зможуть вибрати собі зі шведського столу різноманітні страви, фрукти та овочі. На обід і вечерю їм подаватимуть перші та другі страви з м’ясом, овочами. Харчування у ресторані —тричі на день. Також о 21:00 є додатковий перекус: солодощі, фрукти, соки, фреші, печиво. А у кафе біля басейну діти зможуть поласувати морозивом та свіжими соками. Також ми враховуємо індивідуальні побажання батьків:алергії на певні харчі, вегетаріанське та безлактозне меню. У ресторані готелю складене меню, спеціально для дітей шкільного віку."
      },
      {
        "title": "Басейн",
        "text" :"На території «Wallland» є два відкриті  басейни: великий басейн розміром 12 на 8 метрів, глибиною 1 м 60 см, і дитячий басейн глибиною до 50 см. Вода в басейнах постійно підігрівається до комфортної температури, завжди очищується і оновлюється через фільтри. Діти щоденно зможуть купатися в басейні у відведений час під наглядом викладачів."
      },
      {
        "title": "Проживання",
        "text" :"Діти живуть у різних корпусах: хлопці та дівчата, відповідно до віку. У кожному корпусі — 2, 3, 4-місні готельні номери зі зручностями. У кімнатах — односпальні та двоспальні ліжка, килимове покриття, телевізор, дерев’яні меблі, душ, туалет, фен та змінні рушники."
      }    
    ];

    return (
      <CampLayout>
        <SEO title="Яремче"/>
        <FeaturedYaremche title="Яремче" text="ДИТЯЧИЙ АНГЛОМОВНИЙ ТАБІР В КАРПАТАХ"/>
        <CampAbout title="Про табір" data={aboutCampData}/>
        <NewCost     data={costData}  costTitle={costTitle} />
        <ComfortYaremche title="Комфортний відпочинок" data={comfortData}/>





        <CampProgram title="ПРОГРАМА ТАБОРУ" camp="BoyarCamp в Яремче – це:" data={programData}/>
        <section  className="page-section" id="gallery">
          <div className="page-section-wrapper">
            <div className="title_box">
              <h2 className="text-center">ГАЛЕРЕЯ</h2>
            </div>
            <div className="row no-gutters" style={{marginTop:`20px`}}>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}>
                  <a className="portfolio-box" href="img/yaremche/fullsize/pic01.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                    <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}>
                <a className="portfolio-box" href="img/yaremche/fullsize/pic02.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                </a>
              </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                <a className="portfolio-box" href="img/yaremche/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                <a className="portfolio-box" href="images/yaremche/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                    <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}>
                  <a className="portfolio-box" href="img/yaremche/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                    <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                  <a className="portfolio-box" href="img/yaremche/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                    <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                  <a className="portfolio-box" href="img/yaremche/fullsize/pic07.jpg" onClick={this.handlePortfolioClick.bind(this, 6)}>
                    <Img fluid={this.props.data.images.edges[6].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                  <a className="portfolio-box" href="img/yaremche/fullsize/pic08.jpg" onClick={this.handlePortfolioClick.bind(this, 7)}>
                    <Img fluid={this.props.data.images.edges[7].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                  <a className="portfolio-box" href="img/yaremche/fullsize/pic09.jpg" onClick={this.handlePortfolioClick.bind(this, 8)}>
                    <Img fluid={this.props.data.images.edges[8].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                  <a className="portfolio-box" href="img/yaremche/fullsize/pic10.jpg" onClick={this.handlePortfolioClick.bind(this, 9)}>
                    <Img fluid={this.props.data.images.edges[9].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                  <a className="portfolio-box" href="img/yaremche/fullsize/pic11.jpg" onClick={this.handlePortfolioClick.bind(this, 10)}>
                    <Img fluid={this.props.data.images.edges[10].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6" style={{marginBottom:`20px`}}>
                <div style={{width:`96%`, height: `100%`, margin: `0 auto`}}> 
                  <a className="portfolio-box" href="img/yaremche/fullsize/pic12.jpg" onClick={this.handlePortfolioClick.bind(this, 11)}>
                    <Img fluid={this.props.data.images.edges[11].node.childImageSharp.fluid}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contact title="КОНТАКТИ"/>
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
    images: allFile(filter: {relativePath: {glob: "yaremche/fullsize/*.jpg"}}, sort: {fields: name}) {
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
