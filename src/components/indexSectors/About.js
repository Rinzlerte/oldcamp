import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
export default class About extends Component {
  constructor(props){
    super(props);
    this.state = {
        count: 0,
    }
    this.showProgram = this.showProgram.bind(this);
  }

  showProgram(data){
    this.setState({ count: data })
  }

  slideToLeft =()=>{
    if (this.state.count !== 0){
      this.setState({ count:  this.state.count - 1});
    } else {
      this.setState({ count: 5});
    }
  }
  slideToRight =()=>{
    if (this.state.count !== 5){
      this.setState({count: this.state.count + 1});
    } else {
      this.setState({ count: 0});
    }
  }



  render() {
    return (
      <section className="page-section about_bg" id="about" style={{padding: `0 20x`}}>
        <div className="page-section-wrapper">
          <h2 className="text-center b_f" style={{marginTop: `40px`}}>
            <span className="blue_color">BOYAR</span> <span style={{color: `#FFD700`}}>CAMP</span>
          </h2>
          <div className="program_sm_wrapper" style={{marginTop: `50px`}}>
        
            {this.state.count === 0 &&
                 <Fade right>
              <div className="program-item">
              <div className="program-icon learning-icon"></div>
              <h3 className="h3 mb-2 b_f"> Навчання</h3>
              <p className="text-muted">Усіх учасників ми розподіляємо на підгрупи відповідно до їхнього рівня англійської та віку. Заняття
  проходять в інтерактивній формі з використанням новітніх методик викладання. За умови хорошої
  погоди - в альтанках на вулиці, біля басейну, за столиками в лісі (який включений в територію
  комплексу), якщо дощить – в ігрових кімнатах, лаундж-зоні та конференц-залі.
              </p>
              </div>
              </Fade>
            }
            { this.state.count === 1 &&
              <Fade right>
              <div className="program-item">
              <div className="program-icon events-icon"></div>
                <h3 className="h3 mb-2 b_f"> Розваги</h3>
                <p className="text-muted">Друга половина кожного дня присвячена розвагам: екскурсії, квести, змагання, спортивні ігри,
  майстер-класи, воркшопи, тематичні вечірки, басейн, лазертаг, катання на конях, сплав по річці,
  дискотеки, поїздки на квадроциклах, туристичні походи та поїздки на велосипедах, караоке, кіно...
  Особливістю є те, що усі види дозвілля проводяться англійською мовою.
                </p>
              </div>
              </Fade>
            }
            { this.state.count === 2 &&
               <Fade right>
              <div className="program-item">
              <div className="program-icon foods-icon"></div>
                <h3 className="h3 mb-2 b_f"> Харчування</h3>
                <p className="text-muted"> 4-разовое харчуваня, повноцінний сніданок, обід та вечеря доповнюється поживним підвечірком.
              Основне меню розроблене у відповідності до рекомендацій Міністерства охорони здоров'я.
              Додаткове харчування потішить дітей фруктами та солодощами.
                </p>
              </div>
              </Fade>
            }
            { this.state.count === 3 &&
             <Fade right>
              <div className="program-item">
                <div className="program-icon placed-icon"></div>
                <h3 className="h3 mb-2 b_f"> Розташування</h3>
                <p className="text-muted">
                На території таборів розташовані , ресторани, нові спортивні майданчики, дитячі майданчики з
каруселями, батут, настільний теніс, басейни різної глибини - дитячі та дорослі(з підігрівом).
                </p>
              </div>
              </Fade>
            }
            { this.state.count === 4 &&
               <Fade right>
              <div className="program-item">
              <div className="program-icon living-icon"></div>
                <h3 className="h3 mb-2 b_f">Проживання</h3>
                <p className="text-muted">У кожному корпусі - 2,3,4 -місні номери зі зручностями. У кімнатах – односпальні та двоспальні ліжка,
              килимове покриття, телевізор, нові меблі, душ, туалет, фен та змінні рушники.
              </p>
              </div>
                </Fade>
            }
            { this.state.count === 5 &&
              <Fade right>
                <div className="program-item">
                  <div className="program-icon hospital-icon"></div>
                  <h3 className="h3 mb-2 b_f"> Здоровя</h3>
                  <p className="text-muted">В штаті дитячого табору працює лікар. Вчасна медична допомога гарантує безпеку дітей та персоналу. Всі працівники проходять медичний огляд до початку роботи в таборі. Наші табори знаходяться у містах, де є лікарня із всіма необхідними спеціалістами
                  </p>
                </div>
              </Fade>
            }
            <div className="slide_swithcers">
              <div className="small_switch_btn" role="presentation" onClick={() => this.showProgram(0)}></div>
              <div className="small_switch_btn" role="presentation"onClick={() => this.showProgram(1)}></div>
              <div className="small_switch_btn" role="presentation"onClick={() => this.showProgram(2)}></div>
              <div className="small_switch_btn" role="presentation"onClick={() => this.showProgram(3)}></div>
              <div className="small_switch_btn" role="presentation"onClick={() => this.showProgram(4)}></div>
              <div className="small_switch_btn" role="presentation"onClick={() => this.showProgram(5)}></div>
            </div>
            <div className="slide_nav">
              <div className="slide_nav_btn slide_left" role="presentation" onClick={this.slideToLeft}></div>
              <div className="slide_nav_btn slide_right" role="presentation" onClick={this.slideToRight}></div>
            </div>
          </div>
          <div className="program_wrapper" style={{marginTop: `50px`}}>
            <div className="program-item">
              <div className="program-icon learning-icon"></div>
              <h3 className="h3 mb-2 b_f"> Навчання</h3>
              <p className="text-muted">Усіх учасників ми розподіляємо на підгрупи відповідно до їхнього рівня англійської та віку. Заняття
  проходять в інтерактивній формі з використанням новітніх методик викладання. За умови хорошої
  погоди - в альтанках на вулиці, біля басейну, за столиками в лісі (який включений в територію
  комплексу), якщо дощить – в ігрових кімнатах, лаундж-зоні та конференц-залі.
              </p>
            </div>
            <div className="program-item">
              <div className="program-icon events-icon"></div>
                <h3 className="h3 mb-2 b_f"> Розваги</h3>
                <p className="text-muted">Друга половина кожного дня присвячена розвагам: екскурсії, квести, змагання, спортивні ігри,
  майстер-класи, воркшопи, тематичні вечірки, басейн, лазертаг, катання на конях, сплав по річці,
  дискотеки, поїздки на квадроциклах, туристичні походи та поїздки на велосипедах, караоке, кіно...
  Особливістю є те, що усі види дозвілля проводяться англійською мовою.
                </p>
            </div>
            <div className="program-item">
              <div className="program-icon foods-icon"></div>
                <h3 className="h3 mb-2 b_f"> Харчування</h3>
                <p className="text-muted"> 4-разовое харчуваня, повноцінний сніданок, обід та вечеря доповнюється поживним підвечірком.
              Основне меню розроблене у відповідності до рекомендацій Міністерства охорони здоров'я.
              Додаткове харчування потішить дітей фруктами та солодощами.
                </p>
            </div>
            <div className="program-item">
                <div className="program-icon placed-icon"></div>
                <h3 className="h3 mb-2 b_f"> Розташування</h3>
                <p className="text-muted">
                На території таборів розташовані , ресторани, нові спортивні майданчики, дитячі майданчики з
каруселями, батут, настільний теніс, басейни різної глибини - дитячі та дорослі(з підігрівом).
                </p>
            </div>
            <div className="program-item">
              <div className="program-icon living-icon"></div>
                <h3 className="h3 mb-2 b_f">Проживання</h3>
                <p className="text-muted">У кожному корпусі - 2,3,4 -місні номери зі зручностями. У кімнатах – односпальні та двоспальні ліжка,
              килимове покриття, телевізор, нові меблі, душ, туалет, фен та змінні рушники.
              </p>
            </div>
            <div className="program-item">
              <div className="program-icon hospital-icon"></div>
              <h3 className="h3 mb-2 b_f">Здоров'я</h3>
              <p className="text-muted">В штаті дитячого табору працює лікар. Вчасна медична допомога гарантує безпеку дітей та персоналу. Всі працівники проходять медичний огляд до початку роботи в таборі. Наші табори знаходяться у містах, де є лікарня із всіма необхідними спеціалістами</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
