import React from 'react'

const ComfortAdult = ({title, data}) => {
    return (
        <section className="page-section" id="comfort">
        <div className="page-section-wrapper">
            <h2 className="text-center b_f">{title}</h2>
            <div style={{marginTop: `50px`,
             display: `flex`, 
             justifyContent: `space-around`, 
             flexWrap: `wrap`}}
             >
                {
                    data.map((item, index)=>{
                        return (
                            <div key={index} 
                                style={{
                                margin: `10px`, 
                                backgroundColor: `#fff`, 
                                padding: ` 20px`,
                                maxWidth: `300px`
                                }}>
                                <p style={{fontSize: `20px`, textAlign: `center`, fontWeight: `bold`, marginBottom: `28px`}}>{item.title}</p>
                                <p>
                                    {item.text}
                                </p>
                            </div>
                        )
                    })
                }

                
                    {/* <div className="comfort_item">
                        <span>{data[1].title}</span>
                        <p>{data[1].text}</p>
                    </div> */}

                {/* <div className="bf1">
                    <div className="comfort_item">
                       
                        <span>{data[0].title}</span>
                        <p>{data[0].text}</p>
                    </div>
                    <div className="comfort_item">
                        <img src={imgfood} alt="#"/>
                        <span>{data[1].title}</span>
                        <p>{data[1].text}</p>
                    </div>
                </div>
                <div className="bf1">
                <div className="comfort_item">
                    <img src={imgpool} alt="#"/>
                    <span>{data[2].title}</span>
                    <p>{data[2].text}</p>
                </div>
                <div className="comfort_item">
                    <img src={imgliving} alt="#"/>
                    <span>{data[3].title}</span>
                    <p>{data[3].text}</p>
                </div>
                </div> */}
            </div>
        </div>
    </section>
    )
}

export default ComfortAdult
