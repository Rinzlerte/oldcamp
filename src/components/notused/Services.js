import React from 'react'

const Services = (props) => {
    return (
        <section className="page-section" id="services" style={{paddingBottom: `0`}}>
          <div className="page-section-wrapper">
            <div className="title_box">
              <h2 className="text-center b_f">{props.title}</h2>
            </div>
            <div className="row" style={{marginTop: `60px`}}>
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="program-icon learning-icon"></div>
                    <h3 className="h4 mb-2 text-center b_f"> Навчання</h3>
                    <p className="text-muted mb-0 text-center p-p">
                    Усіх учасників ми розподіляємо на підгрупи відповідно до їхнього рівня англійської та віку. Заняття
проходять в інтерактивній формі з використанням новітніх методик викладання. За умови хорошої
погоди - в альтанках на вулиці, біля басейну, за столиками в лісі (який включений в територію
комплексу), якщо дощить – в ігрових кімнатах, лаундж-зоні та конференц-залі.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                  <div className="program-icon events-icon"></div>
                    <h3 className="h4 mb-2 text-center b_f"> Розваги</h3>
                    <p className="text-muted mb-0 text-center p-p">
                    Друга половина кожного дня присвячена розвагам: екскурсії, квести, змагання, спортивні ігри,
майстер-класи, воркшопи, тематичні вечірки, басейн, лазертаг, катання на конях, сплав по річці,
дискотеки, поїздки на квадроциклах, туристичні походи та поїздки на велосипедах, караоке, кіно...
Особливістю є те, що усі види дозвілля проводяться англійською мовою.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-1">
                  <div className="card-body">
                  <div className="program-icon foods-icon"></div>
                    <h3 className="h4 mb-2 text-center b_f"> Харчування</h3>
                    <p className="text-muted mb-0 text-center p-p">
                    4-разове харчуваня, повноцінний сніданок, обід та вечеря доповнюється поживним підвечірком.
Основне меню розроблене у відповідності до рекомендацій Міністерства охорони здоров&#39;я.
Додаткове харчування потішить дітей фруктами та солодощами.
                    </p>
                  </div>
                </div>
              </div>
          </div>
          <div className="row" >
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                  <div className="program-icon placed-icon"></div>
                    <h3 className="h4 mb-2 text-center b_f"> Розташування</h3>
                    <p className="text-muted mb-0 text-center p-p">
                    На території таборів розташовані ресторани, нові спортивні майданчики, дитячі майданчики з
каруселями, батут, настільний теніс, басейни різної глибини - дитячі та дорослі(з підігрівом).
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                  <div className="program-icon living-icon"></div>
                    <h3 className="h4 mb-2 text-center b_f">Проживання</h3>
                    <p className="text-muted mb-0 text-center p-p">
                    У кожному корпусі - 2,3,4 -місні номери зі зручностями. У кімнатах – односпальні та двоспальні ліжка,
килимове покриття, телевізор, нові меблі, душ, туалет, фен та змінні рушники.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                  <div className="program-icon hospital-icon"></div>
                  <h3 className="h4 mb-2 text-center b_f">Здоров'я</h3>
                  <p className="text-muted mb-0 text-center p-p">
                  В штаті дитячого табору працює лікар. Вчасна медична допомога гарантує безпеку дітей та персоналу.
Всі працівники проходять медичний огляд до початку роботи в таборі. Наші табори знаходяться у
містах, де є лікарня із всіма необхідними спеціалістами
                  </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Services
