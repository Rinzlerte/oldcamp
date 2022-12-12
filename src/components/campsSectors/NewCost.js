import React from "react"
import img1 from "../../images/calandar.png"
import img2 from "../../images/map.png"
import img3 from "../../images/friends.png"
import img4 from "../../images/cost.png"

import ColapseItem from "../../utils/ColapseItem"

const NewCost = ({ data, costTitle }) => {
  const renderIcon = (index) => {
    if (index === 0) {
      return <img src={img1} alt="img" />
    }
    if (index === 1) {
      return <img src={img2} alt="img" />
    }
    if (index === 2) {
      return <img src={img3} alt="img" />
    }
    if (index === 3) {
      return <img src={img4} alt="img" />
    } else return null
  }

  return (
    <section className="page-section" id="cost">
      <div className="title_box" style={{ marginTop: `20px` }}>
        <h2 className="text-center mt-0">ЦІНИ ТА ДАТА ЗАІЗДУ</h2>
      </div>
      <div className="race-cost-wrapper container">
        <div className="shadow" style={{ padding: `14px`, marginTop: `50px` }}>
          {costTitle?.map((item, index) => {
            return (
              <div key={index}>
                <div style={{ display: `flex`, alignItems: `center` }}>
                  <div className="cost-icon" style={{ marginRight: `24px` }}>
                    {renderIcon(index)}
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="races">
          {data.map((item, index) => {
            return (
              <ColapseItem
                key={index}
                title={item.name}
                about={item.about}
                timing={item.timing}
                reservation={item.reservation}
                price={item.price}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default NewCost
