import React from 'react'

import plaiImg from '../assets/images/plai.png'
import wellandImg from '../assets/images/welland.png'
import knowledge from '../assets/images/lingua.png'

const Partners = () => {

    const data = [
        {
            "name" : "КЛУБ ГОТЕЛЬ  WELLLAND",
            "url": "http://www.wellland.com.ua/",
            "image": wellandImg
        },
        {
            "name" : "ГІРСЬКО ЛИЖНИЙ КОМПЛЕКС ПЛАЙ",
            "url": "https://play-karpaty.com/",
            "image": plaiImg
        },
        {
            "name" : "ОСВІТНЕ АГЕНТСТВО LINGUA",
            "url": "https://lingua-franca.org.ua/",
            "image": knowledge
        }
    ]


  return (
    <section className="page-section" id="partners" style={{marginBottom: `100px`}}>
      <div className="page-section-wrapper">
        <div className="title_box">
          <h2 className="mt-0 b_t" >Партнери</h2>
        </div>
        <div className="partner-container">
            { data ?
                data.map((item, index)=>{
                    return (
                        <div className="card" style={{width: `20rem`, padding:`2px`, margin:`22px`}} key={index}>
                            <img className="card-img-top" src={item.image} alt={item.name}/>
                            <div style={{marginTop: `8px`, textAlign: `center`}}>
                            <a href={item.url} className="card-title partners-url" style={{color: `#1E90FF`, fontWeight: `700`}}>{item.name}</a>
                            </div>
                        </div>
                    )
                })
                : null
            }
        </div>
      </div>
    </section>
  )
}

export default Partners