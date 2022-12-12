import React from 'react'
import ContactForm from "../../utils/ContactForm"

const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="page-section-wrapper">
        <div className="title_box">
          <h2 className="mt-0 b_t" >Контакти</h2>
        </div>
        <div className="contact-box">
          <div className="callback">
            <a href="tel:3-8-097-629-36-01" className="phone-square"
              aria-label="call"></a>
            <a href="tel:3-8-097-629-36-01" className="contact-phone" 
              aria-label="call"style={{ color: `#6AC547`, textDecoration: `none` }}>+38 (097) 629-36-01</a>
          </div>
        </div>
        <div className="contact-box">
          <a href="tel:0-800-211-036" className="phone-square" aria-label="call"></a>
          <a href="tel:0-800-211-036" className="contact-phone" aria-label="call" style={{ color: `#6AC547`, textDecoration: `none` }}>0 (800) 211-036</a>
        </div>
        <p style={{ textAlign: `center`, color: `#6AC547`, fontWeight: `700`}}>безкоштовно з України</p>
        <div className="contact-box">
       
          <div className="getting-camp">
            <span className="title blue_color">BOYAR</span>
            <div className="getting_list">
              <span style={{marginTop: `25px`}}>Забронювати путівку</span>
              <p>У формі нижче вказати контактні дані</p>
              <span  style={{marginTop: `25px`}}>Необхідні документи</span>
              <p>Свідоцтво про народження дитини <br/>
              Паспорт одного із батьків <br/>Договір<br/>
              Путівка
              <br/>Медична довідка(079о)
              <br/>Квитанція про оплату </p>
              <span style={{marginTop: `25px`}}>ОПЛАТА</span>
              <p>Від моменту бронювання необхідно оплатити вартість заїзду протягом 7 днів і надіслати квитанцію</p>
            </div> 
          </div>
            
          <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default Contact