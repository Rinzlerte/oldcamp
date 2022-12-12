import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
export default class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            commentCount: 0,
        }
    }

    slideToLeft =()=>{
        if (this.state.commentCount !== 0){
            this.setState({
                commentCount: this.state.commentCount - 1
            });
        }else {
            this.setState({
                commentCount: 5
            });
        }
    }

    slideToRight =(e)=>{
        e.preventDefault();
        if (this.state.commentCount !== 5){
            this.setState({
                commentCount: this.state.commentCount + 1
            });
        } else {
            this.setState({
                commentCount: 0
            });
        }
    }

    render() {
        return (
            <div className="comments_container">
                <div className="title_box">
                    <h2 className="b_t">ВІДГУКИ</h2>
                </div>
                <div className="comments_box">
                    <div className="box_nav left hide" role="presentation" onClick={this.slideToLeft}></div>
                    { this.state.commentCount === 0 && 
                    <Fade right>
                        <div className="comment">
                            <div className="comment_dots"></div>
                            <p>
                            The best camp ever {'\u2728'} If you do not know which camp to choose for summer, I'll tell you «BOYAR CAMP» .The best camp, best teachers and best program
                            </p>
                            <span className="autor">Angelina Kardashuk</span>
                        </div>
                        </Fade>
                    }
                    {this.state.commentCount === 1 && 
                     <Fade right>
                        <div className="comment">
                            <div className="comment_dots"></div>
                            <p>
                            A lot of thanks for all people who organized this camp!!! You are cool!!! you are...a lot of new friends, a time to get a new opinion!!! We like it very much and recomend it for everyone!!!We suppose to see you next year!!!
                            </p>
                            <span className="autor">Надія Марич</span>
                        </div>
                        </Fade>
                    }
                    {this.state.commentCount === 2 && 
                      <Fade right>
                        <div className="comment">
                            <div className="comment_dots"></div>
                            <p>
                            Мега класний табір!!! Були вже другий раз!!! Донька в захваті! До зустрічі наступного року!
                            </p>
                            <span className="autor">Зоряна Задорожна</span>
                        </div>
                        </Fade>
                    }
                    {this.state.commentCount === 3 && 
                       <Fade right>
                        <div className="comment">
                            <div className="comment_dots"></div>
                            <p>
                            Дякуємо за незабутні враження дітей - емоції зашкалюють! Нових ідей Вам та творчого натхнення! Раді знайомству з Вами та сподіваємося на нову зустріч!
                            </p>
                            <span className="autor">Света Будовская</span>
                        </div>
                        </Fade>
                    }
                    {this.state.commentCount === 4 && 
                       <Fade right>
                        <div className="comment">
                            <div className="comment_dots"></div>
                            <p>
                                The best camp ever. If you do not know which camp to choose for summer.
                            </p>
                            <span className="autor">Viktoriia Hryhoriv</span>
                        </div>
                        </Fade>
                    }
                    {this.state.commentCount === 5 && 
                      <Fade right>
                        <div className="comment">
                            <div className="comment_dots"></div>
                            <p>
                            Ми приєднуємось до всіх подяк на вашу адресу!! Безмежно вдячні усій команді табору та відпочинкового комплексу за турботу, увагу та працю! Особлива подяка адміністратору Олі, яка реагувала на мої прохання, переживання навіть серед ночі!! Ми у таборі були вперше, але точно не востаннє!! Дякуємо, що змогли зацікавити і викликати бажання до такого відпочинку :) Ви молодці!!!
                            </p>
                            <span className="autor">Viktoriia Hryhoriv</span>
                        </div>
                        </Fade>
                    }
                    {this.state.commentCount === 6 && 
                      <Fade right>
                        <div className="comment">
                            <div className="comment_dots"></div>
                            <p>
                            Каждый год мы что-то новое открываем для себя. В этом мы открыли Бояр Саmp!!! Це було неперевершено!! Огромное спасибо за ВСЁ! Жаль что не познакомились с вами раньше, теперь не пропустим ни одного сезона пока это будет позволять возвраст ребенка и смело рекомендовать вас всем. Спасибо что вы есть!
                            </p>
                            <span className="autor">Ruslan Babushkin</span>
                        </div>
                        </Fade>
                    }
                    <div className="box_nav right hide" role="presentation" onClick={this.slideToRight}></div>
                </div>
            </div>
        )
    }
}

