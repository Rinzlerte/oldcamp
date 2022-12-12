import React from 'react'
import ApplyForm from "../../utils/ApplyForm"

const Apply = (props) => {
  const {title} = props;
  return (
    <section className="page-section" id="contact">
      <div className="page-section-wrapper">
        <div className="title_box">
          <h2 className="mt-0 b_t" >{title}</h2>
        </div>
        <div className="contact-box">
          <div className="getting-camp">
            <span className="title blue_color">BOYAR</span>
            <div className="getting_list">
              <span style={{marginTop: `25px`}}>Забронювати путівку</span>
              <p>У формі нижче вказати контактні дані</p>
              <span  style={{marginTop: `25px`}}>Необхідні документи</span>
              <p>заповнена  он-лайн анкета
              <br/>фото\копія паспорта
              <br/>Квитанція про оплату </p>
              <span style={{marginTop: `25px`}}>ОПЛАТА</span>
              <p>Від моменту бронювання необхідно оплатити вартість заїзду протягом 7 днів і надіслати квитанцію</p>
            </div> 
          </div>
          <ApplyForm />
        </div>
      </div>
    </section>
  )
}

export default Apply