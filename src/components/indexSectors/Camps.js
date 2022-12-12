import React from 'react'
import {Link} from 'gatsby'
// import Covid from '../../components/Covid'

const Camps = (props) => {
  return (
      <section className="page-section" id="camps">
        <div className="title_box">
          <h2 className="text-center mt-0 b_f">{props.title}</h2>
        </div> 
        {/* <div style={{maxWidth:`960px`, margin: `24px auto`}}> 
          <Covid />
        </div> */}
        <div className="camps_wrapper">
                  <Link to="/yaremche" className="camp-container">
                    <div className="camp-wrapper" >
                      <div className="camp-bg" style={{backgroundColor: `#DC143C`}}></div>
                      <div className="camp-img yaremche"></div>
                    </div>
                    <p>ЯРЕМЧЕ</p>
                  </Link>
                  {/* <Link to="/plai" className="camp-container">
                    <div className="camp-wrapper" >
                      <div className="camp-bg" style={{backgroundColor: `#32CD32`}}></div>
                      <div className="camp-img plai"></div>
                    </div>
                    <p>ПЛАЙ</p>
                </Link> */}
                {/* <Link to="/slovachunna/" className="camp-container">
                    <div className="camp-wrapper" >
                      <div className="camp-bg" style={{backgroundColor: `#1E90FF`}}></div>
                      <div className="camp-img slovachunni"></div>
                    </div>
                    <Link to="/slovachunna/">СЛОВАЧЧИНА</Link>
                </Link> */}
                {/* <Link to="/adult" className="camp-container">
                    <div className="camp-wrapper" >
                      <div className="camp-bg" style={{backgroundColor: `#FFD700`}}></div>
                      <div className="camp-img adult" ></div>
                    </div>
                    <p >ДОРОСЛИЙ</p>
                  </Link> */}
                  <Link to="/autumn" className="camp-container">
                    <div className="camp-wrapper" >
                      <div className="camp-bg" style={{backgroundColor: `#33F6FF`}}></div>
                      <div className="camp-img autumn" ></div>
                    </div>
                    <p >ОСІННІЙ</p>
                  </Link>
                  {/* <Link to="/bolgaria" className="camp-container">
                    <div className="camp-wrapper" >
                      <div className="camp-bg" style={{backgroundColor: `#33F6FF`}}></div>
                      <div className="camp-img bolgaria" ></div>
                    </div>
                    <p >БОЛГАРІЯ</p>
                  </Link> */}
{/* 
                  <Link to="/preschool" className="camp-container">
                    <div className="camp-wrapper" >
                      <div className="camp-bg" style={{backgroundColor: `#BB8FCE`}}></div>
                      <div className="camp-img autumn_adult" ></div>
                    </div>
                    <p>ДОШКІЛЬНЯТА + БАТЬКИ</p>
                  </Link> */}
                  {/* <Link to="/winter" className="camp-container">
                    <div className="camp-wrapper" >
                      <div className="camp-bg" style={{backgroundColor: `#BFBCBB`}}></div>
                      <div className="camp-img winter_plai"></div>
                    </div>
                    <p>WINTER(ПЛАЙ)</p>
                  </Link> */}

                   {/* <Link to="/london-weekend" className="camp-container">
                    <div className="camp-wrapper" >
                      <div className="camp-bg" style={{backgroundColor: `#BFBCBB`}}></div>
                      <div className="camp-img london"></div>
                    </div>
                    <p>LONDON WEEKEND</p>
                  </Link> */}

                  {/* <Link to="/winter-fairy-tales-lviv" className="camp-container">
                    <div className="camp-wrapper" >
                      <div className="camp-bg" style={{backgroundColor: `#BFBCBB`}}></div>
                      <div className="camp-img winter_lviv"></div>
                    </div>
                    <p>Winter fairy tales - Lviv</p>
                  </Link>
                  <Link to="/winter-fairy-tales-yaremche" className="camp-container">
                    <div className="camp-wrapper" >
                      <div className="camp-bg" style={{backgroundColor: `#BFBCBB`}}></div>
                      <div className="camp-img winteryaremche"></div>
                    </div>
                    <p>Winter fairy tales - Яремче</p>
                  </Link> */}
            </div>
    </section>
  )
}

export default Camps