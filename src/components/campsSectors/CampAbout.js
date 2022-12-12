import React from 'react'
// import Covid from '../Covid'
export default class CampAbout extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <section className="page-section" id="about">
                <div className="page-section-wrapper">
                    <div className="title_box" style={{marginBottom:`10px`}}>
                        <h2 className="text-center mt-0">ПРО ТАБІР</h2>
                    </div>
                    {/* <div style={{maxWidth:`960px`, margin: `0 auto`}}> 
                        <Covid />
                    </div> */}
                    <div className="inform_box">
                        {
                            data.map((item,index)=>(
                            <p key={index}>{item.text}</p>
                            ))
                        }

                        {this.props.children}
                    </div>
                    <div className="img_slider">
                        <div className="slide_box"> 
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
