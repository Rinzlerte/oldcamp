import React from 'react'

const CampProgram = ({title, camp, data, list, children}) => {

  const renderInfo =(datarray)=>{
    if (datarray) {
      return datarray.map((item, index)=>(
        <React.Fragment key={index}>
          <span>{item.span}</span>
          <p>{item.desc}</p>
        </React.Fragment>
      ))
    }
  }

    return (
    <section className="page-section " id="program">
      <div className="page-section-wrapper">
        <div className="title_box">
          <h2 className="text-center">{title}</h2>
        </div>
        <div className="prog_about">
          <h3 className="camp_prog_h ">{camp}</h3>
             {renderInfo(data)}

             {list?.map((item, index)=>{
               return <p key={index}>{item}</p>
             })

             }
        </div>
        {
          children
        }
      </div>
    </section>
  )
}

export default CampProgram