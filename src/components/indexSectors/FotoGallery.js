import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class FotoGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fotoSlideCount: 0,
            videoSlideCount: 0
        }
    }
    
    slidePhotoToLeft =()=>{
        if (this.state.fotoSlideCount !== 0){
            this.setState({
                fotoSlideCount: this.state.fotoSlideCount - 1
            });
        }else {
            this.setState({fotoSlideCount: 1});
        }
    }

    slidePhotoToRight =()=>{
        if (this.state.fotoSlideCount !== 1){
            this.setState({
                fotoSlideCount: this.state.fotoSlideCount + 1
            });
        } else {
            this.setState({ fotoSlideCount: 0 });
        }
    }

    slideVideToLeft =()=>{
        if (this.state.videoSlideCount !== 0){
            this.setState({
                videoSlideCount: this.state.videoSlideCount - 1
            });
        }else {
            this.setState({videoSlideCount: 2});
        }
    }

    slideVideoToRight =()=>{
        if (this.state.videoSlideCount!== 2){
            this.setState({
                videoSlideCount: this.state.videoSlideCount + 1
            });
        } else {
            this.setState({ videoSlideCount: 0 });
        }
    }

    render() {
        return (
            <section className="page-section" id="videogallery">
                <div className="page-section-wrapper">
                    {/* <div className="title_box" style={{margin:`0`}}>
                        <h2 className="text-center mt-0">ФОТОГАЛЕРЕЯ</h2>
                    </div> */}
                    {/* <div className="gallery_box" style={{marginTop:`20px`}}>
                        {this.state.fotoSlideCount === 0 && 
                            <Fade right>
                                <div className="galery_slide">
                                    <div className="img_block">
                                        <img src={person1} alt="#"/>
                                        <span className="img_desc"></span>
                                    </div>
                                    <div className="img_block">
                                        <img src={person2} alt="#"/>
                                        <span className="img_desc"></span>
                                    </div>
                                </div>
                            </Fade>
                        }  
                        {this.state.fotoSlideCount === 1 && 
                            <Fade right>
                                <div className="galery_slide">
                                    <div className="img_block">
                                        <img src={person1} alt="#"/>
                                        <span className="img_desc"></span>
                                    </div>
                                    <div className="img_block">
                                        <img src={person2} alt="#"/>
                                        <span className="img_desc"></span>
                                    </div>
                                </div>
                            </Fade>
                        }
                    </div>
                    <div className="slide_btn sides-centered"> 
                        <div className="left" style={{margin:`0`}}  onClick={this.slidePhotoToLeft}></div>
                        <div className="right" style={{margin:`0`}} onClick={this.slidePhotoToRight}></div>
                    </div>
                    <div className="title_box" style={{margin:`0`}}>
                        <h2 className="text-center mt-0">ВІДЕО</h2>
                    </div> */}
                    <div className="gallery_box" style={{marginTop:`20px`}}>
                        {this.state.videoSlideCount === 0 && 
                            <div className="galery_slide">
                                <div className="player-wrapper">
                                    <ReactPlayer
                                            className='react-player'
                                            url='https://www.youtube.com/watch?v=vb0aVA--SA8'
                                            width="100%"
                                            height="100%"
                                            controls={false}
                                    />
                                </div>
                                 <div className="player-wrapper">
                                        <ReactPlayer
                                            className='react-player'
                                            url='https://www.youtube.com/watch?v=f3ztKC5Lr9I'
                                            width="100%"
                                            height="100%"
                                            controls={false}
                                        />
                                    </div>
                            </div>
                        }  
                        {this.state.videoSlideCount === 1 && 
                                <div className="galery_slide">
                                    <div className="player-wrapper">
                                       <ReactPlayer
                                            className='react-player'
                                            url='https://www.youtube.com/watch?v=TX3jTepQpgE'
                                            width="100%"
                                            height="100%"
                                            controls={false}
                                        />
                                    </div>
                                    <div className="player-wrapper">
                                        <ReactPlayer
                                            className='react-player'
                                            url='https://www.youtube.com/watch?v=1GW0XveC2ME'
                                            width="100%"
                                            height="100%"
                                            controls={false}
                                        />
                                    </div>
                                </div>
                        }
                        {this.state.videoSlideCount === 2 && 
                            <div className="galery_slide">
                                <div className="player-wrapper">
                                    <ReactPlayer
                                            className='react-player'
                                            url='https://www.youtube.com/watch?v=HL6K19CJwmU&t=1s'
                                            width="100%"
                                            height="100%"
                                            controls={false}
                                    />
                                </div>
                                <div className="player-wrapper">
                                    <ReactPlayer
                                            className='react-player'
                                            url='https://www.youtube.com/watch?v=jQ_LkLvUPyw'
                                            width="100%"
                                            height="100%"
                                            controls={false}
                                    />
                                </div>
                            </div>
                        }
                    </div>
                    <div className="slide_btn sides-centered" style={{marginTop:`20px`}}> 
                        <div className="left" style={{margin:`0`}} role="presentation" onClick={this.slideVideToLeft}></div>
                        <div className="right"style={{margin:`0`}} role="presentation" onClick={this.slideVideoToRight}></div>
                    </div>
                </div>
            </section>
        )
    }
}
