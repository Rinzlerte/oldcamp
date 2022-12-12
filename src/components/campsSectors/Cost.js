import React from "react"
import img1 from "../../images/calandar.png"
import img2 from "../../images/map.png"
import img3 from "../../images/friends.png"
import img4 from "../../images/cost.png"

const Cost = (props) => {
  const { title, costTitle, tabledata } = props

    const renderIcon = index => {
        if (index === 0) {
            return  <img src={img1} alt="img" />
        }
        if (index ===1) {
            return  <img src={img2} alt="img" />
        }
        if (index ===2) {
            return  <img src={img3} alt="img" />
        }
        if (index ===3) {
            return  <img src={img4} alt="img" />
        }
        else return null
    }

  const renderRow = (dat) => {
    if (dat) {
      return dat.map((item, index) => (

        <div className="centered-icon" key={index}>
            <div className="cost-icon">
                { renderIcon(index)}
             
            </div>
            <div
                className="text-center table-head-info"
            >
                <span>{item.text}</span>
                <span>{item.desc}</span>
            </div>
        </div>
       
      ))
    }
  }

  return (
    <section className="page-section" id="cost">
      <div className="page-section-wrapper">
        <div className="title_box" style={{ marginTop: `20px` }}>
          <h2 className="text-center mt-0">{title}</h2>
        </div>
        <div
          style={{
            marginTop: `20px`,
        
          }}
          className="cost-tablehead"
        >
          {renderRow(costTitle)}
        </div>
                <div style={{marginTop:`20px`, padding: `10px 20px`}}>
                    <div style={{overflow: `auto`}}>
                        <table
                            style={{ width: `100%` }}
                            cellPadding="6"
                            cellSpacing="0"
                            className="dep-res-table"
                            >
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>ОПИСАННЯ</th>
                                    <th>ТРИВАЛІСТЬ</th>
                                    <th>РАННЄ БРОНЮВАННЯ</th>
                                    <th>ЦІНА</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabledata.map((row, index) => (
                                    <tr key={index}>
                                        <td style={{color: `red`}}>{row.name}</td>
                                        <td>{row.about}</td>
                                        <td>{row.timing}</td>
                                        <td style={{color: `red`}}>{row.reservation}</td>
                                        <td style={{color: `red`}}>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
      </div>
    </section>
  )
}

export default Cost
