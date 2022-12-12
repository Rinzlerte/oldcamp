import React from 'react'

import imgsafe from '../../images/comfort/plai/save.jpg';
import imgfood from '../../images/comfort/plai/food.jpg';



import imgpool from '../../images/comfort/lygi.jpg';

import imgliving from '../../images/comfort/plai/home.jpg';

const ComfortWinterPlai = ({title, data}) => {
    return (
        <section className="page-section" id="comfort">
            <div className="page-section-wrapper">
                <h2 className="text-center b_f">{title}</h2>
                <div className="comforts-box" style={{marginTop: `50px`}}>
                    <div className="bf1">
                        <div className="comfort_item">
                            <img src={imgsafe} alt="#"/>
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
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ComfortWinterPlai
