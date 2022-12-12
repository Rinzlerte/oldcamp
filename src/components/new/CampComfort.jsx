import React from 'react'

const CampComfort = ({title , s1title, 
  s1description, s2title, s2description, s3title, s3description , s4title, s4description,
   img1, img2, img3, img4}) => {
  return (
    <section
    id="comfort"
    className="page-section"
    // className={sectionclassname ? `${sectionclassname}` : ""}
  >
    <div className="container">
        <h2 className="text-center b_f">{title}</h2>
        <div className='comfrot-grid'>
            <div className='comfrot-grid-card'>
                <div className='comfrot-grid-card-box'>
                    <div className='image-cover'>
                        {img1 &&
                        
                        <img  src={img1} alt=""/>
                        }
                    </div>
                    <h3>
                      {s1title}
                  </h3>

                    <p>
                      {s1description}
                    </p>
                </div>
            </div>

            <div className='comfrot-grid-card'>
                <div className='comfrot-grid-card-box'>
                <div className='image-cover'>
                {img2 &&
                        
                        <img  src={img2} alt=""/>
                        }
                </div>
                <h3>
                {s2title}
                  </h3>
                <p>
                      {s2description}
                      </p>
                </div>
            </div>

            <div className='comfrot-grid-card'>
                <div className='comfrot-grid-card-box'>
                <div className='image-cover'>
                {img3 &&
                        
                        <img  src={img3} alt=""/>
                        }
                </div>
                <h3>
                {s3title}
                </h3>
                <p>
                {s3description}
                      </p>
                </div>
            </div>

            <div className='comfrot-grid-card'>
                <div className='comfrot-grid-card-box'>
                <div className='image-cover'>
                {img4 &&
                        
                        <img  src={img4} alt=""/>
                        }
                </div>
                <h3>
                {s4title}
                  </h3>
                <p>
                {s4description}
                      </p>
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default CampComfort