import React from "react"
import Scroller from "../../components/scroller"

const CampHero = ({ title, description, sectionclassname }) => {
  return (
    <section
      id="hero"
      className={sectionclassname ? `${sectionclassname}` : ""}
    >
      <div className="container">
        <div className="hero-wrapper">
          <div className="front-side">
            <h1 className="hero-title">{title}</h1>
            {description && <p className="hero-description">{description}</p>}

            <div className="hero-centered">
            <a
              className="btn btn-primary btn-lg js-scroll-trigger"
              href="#contact"
              onClick={Scroller.handleAnchorScroll}
            >
              БРОНЮВАННЯ
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampHero
