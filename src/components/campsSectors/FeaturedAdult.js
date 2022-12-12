import React from 'react';
import FeaturedStyles from './Featured.module.css';
import Scroller from '../scroller';

const FeaturedAdult = (props) => {
    const {title, text}= props;
    return (
        <div className={FeaturedStyles.a_container}>
            <div className={FeaturedStyles.wrapper}>
              <div className={FeaturedStyles.wrapper_box}></div>
                <div className={FeaturedStyles.box}>
                    <div className={FeaturedStyles.box_info}>
                        <span className={FeaturedStyles.blocktitle}>{title}</span>
                        <div className={FeaturedStyles.devider}></div>
                        <span className={FeaturedStyles.f_text}>{text}</span>
                        <a className="btn btn-primary btn-lg js-scroll-trigger" href="#contact" onClick={Scroller.handleAnchorScroll}>БРОНЮВАННЯ</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedAdult;