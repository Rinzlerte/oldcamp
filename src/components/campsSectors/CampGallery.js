import React, { Component } from 'react'
// const CommentsData = [
//     {
//         "autor": "Angelina Kardashuk",
//         "text" : "The best camp ever✨♥️ If you do not know which camp to choose for summer, I'll tell you «BOYAR CAMP»💥The best camp, best teachers & best program💕",
//     },
//     {
//         "autor": "Надія Марич",
//         "text" : "A lot of thanks for all people who organized this camp!!! You are cool🤘🤘✊!!! you are...a lot of new friends, a time to get a new opinion!!! We like it very much and recomend it for everyone!!!🤗🤗🤗💕💕💕🥇🥇🥇We suppose to see you next year!!!",
//     },
//     {
//         "autor": "Зоряна Задорожна",
//         "text" : "Мега класний табір!!! 👍 Були вже другий раз!!! Донька в захваті! До зустрічі наступного року😉🤗",
//     },
//     {
//         "autor": "Света Будовская ",
//         "text" : "Дякуємо за незабутні враження дітей - емоції зашкалюють! Нових ідей Вам та творчого натхнення! Раді знайомству з Вами та сподіваємося на нову зустріч!!",
//     },
//     {
//         "autor": "Viktoriia Hryhoriv",
//         "text" : "Ми приєднуємось до всіх подяк на вашу адресу!! Безмежно вдячні усій команді табору та відпочинкового комплексу за турботу, увагу та працю! Особлива подяка адміністратору Олі, яка реагувала на мої прохання, переживання навіть серед ночі!! Ми у таборі були вперше, але точно не востаннє!! Дякуємо, що змогли зацікавити і викликати бажання до такого відпочинку :) Ви молодці!!!",
//     },
//     {
//         "autor": "Ruslan Babushkin",
//         "text" : "Каждый год мы что-то новое открываем для себя. В этом мы открыли Бояр Саmp!!! Це було неперевершено!! Огромное спасибо за ВСЁ! Жаль что не познакомились с вами раньше, теперь не пропустим ни одного сезона пока это будет позволять возвраст ребенка и смело рекомендовать вас всем. Спасибо что вы есть!",
//     }
// ];


export default class CampsGallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            commentCount: 0,
        }
        this.showActual = this.showActual.bind(this);
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

    showActual(data){
        this.setState({ commentCount: data })
    }

    render() {
        const {title} = this.props;
        return (
            <section className="page-section intro-blu-wood" id="gallery">
                <div className="page-section-wrapper">
                    <div className="title_box">
                        <h2 className="text-center">{title}</h2>
                    </div>
                    <div className="gallery-box">
                       <div className=""></div>
                       <div className=""></div>
                       <div className=""></div>
                       <div className=""></div>
                    </div>
                </div>
            </section>
        )
    }
}
