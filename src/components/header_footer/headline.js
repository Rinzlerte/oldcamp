import React from 'react'

const Headline = () => {
    return (
        <div className="head-line">
            {/* <div className="langs">
                <span className="lang">EN</span>
                <span  className="lang">UA</span>
                <span  className="lang">RU</span>
            </div> */}
            <div className="social-icons" style={{ marginRight: `10px`, marginBottom: `10px` }}>
                <a 
                    className="b-facebook"
                    href="https://www.facebook.com/boyarcamp/" target="_blank" rel="noopener noreferrer"
                    >
                </a>
                <a className="b-instagram"
                    href="https://www.instagram.com/boyar_camp/" target="_blank" rel="noopener noreferrer">
                </a>
            </div>
            <div className="callback" style={{ marginRight: `10px`, marginBottom: `10px` }}>
                <a href="tel:+380976293601" className="phone-square" style={{fontSize: `30px`,color:`#6AC547`}}></a>
                <a href="tel:+380976293601" className="contact-phone" style={{ color: `#6AC547`, textDecoration: `none` }}>+38 (097) 629-36-01</a>
            </div>

            <div className="callback" style={{marginRight: `10px`, marginBottom: `10px`}}>
                <a href="tel:0-800-211-036" className="phone-square" aria-label="call"></a>
                <a href="tel:0-800-211-036" className="contact-phone" aria-label="call" style={{ color: `#6AC547`, textDecoration: `none` }}>0 (800) 211-036</a>
            </div>
        </div>
    )
}

export default Headline
