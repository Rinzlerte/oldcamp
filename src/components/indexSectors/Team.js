import React, { Component } from 'react'
import Comments from '../campsSectors/Comments'

import person1 from '../../images/team/p1.png'
import person2 from '../../images/team/p2.png'
import person3 from '../../images/team/p5.png'
import person5 from '../../images/team/p4.png'
import person4 from '../../images/team/p3.png'
import person6 from '../../images/team/p6.png'
export default class Team extends Component {
  constructor(props){
    super(props);
    this.state = {
        personCount: 0,
        SwipeTeam: true
    }
    this.swipeTeams = this.swipeTeams.bind(this);
  }

  swipeTeams =()=>{
    this.setState({
      SwipeTeam: !this.state.SwipeTeam
    })
  }
  slideToLeft =()=>{
    if (this.state.personCount !== 0){
      this.setState({ personCount:  this.state.personCount - 1});
    } else {
      this.setState({ personCount: 5});
    }
  }
  slideToRight =()=>{
    if (this.state.personCount !== 5){
      this.setState({personCount: this.state.personCount + 1});
    } else {
      this.setState({ personCount: 0});
    }
  }

  render() {
    return (
      <section className="page-section green_bg" id="team">
        <div className="title_box" style={{marginTop:`20px`}}>
          <h2 className="mt-0">{this.props.title}</h2>
        </div>
        <div className="team_container_lg" style={{ position: `relative`}}>
          <div className="bg-wrapper" style={{width:`100%`, height: `100%`, position: `absolute`, zIndex: `1`}}></div>
          <div className="content-wrapper" style={{width:`100%`, height: `100%`, position: `absolute`, zIndex: `5`}}>
            <div className="team_slide_btns">
              <div className="team_slide_btn left" role="presentation" onClick={this.swipeTeams}></div>
              <div className="team_slide_btn right" role="presentation" onClick={this.swipeTeams}></div>
            </div>
            {
            this.state.SwipeTeam &&
            <div className="team_row" style={{display: `flex`, justifyContent:`space-around`}}>
              <div className="team-member">
                <img variant="top" src={person1}  style={{width: `100%`, height: `264px`}} alt="team-mate"/>
                <h3 className="text-left team-mate-name">Олеся Ніколаєвич</h3>
                <span className="text-left  team-mate-position">Засновник Boyar Camp</span>
              </div>
              <div className="team-member">
                <img variant="top" src={person4}  style={{width: `100%`, height: `264px`}} alt="team-mate"/>
                  <h3 className="text-left team-mate-name">Mr. Fred</h3>
                    <span className="text-left  team-mate-position">Native speaker</span>
                </div>
              <div className="team-member">
                <img variant="top" src={person3}  style={{width: `100%`, height: `264px`}} alt="team-mate"/>
                <h3 className="text-left team-mate-name">Ms.Dominika</h3>
                <span className="text-left  team-mate-position">Teacher</span>
              </div>
            </div>
            }
            {
            !this.state.SwipeTeam &&
              <div className="team_row" style={{display: `flex`, justifyContent:`space-around`}}>
                <div className="team-member">
                  <img variant="top" src={person5}  style={{width: `100%`, height: `264px`}} alt="team-mate"/>
                  <h3 className="text-left team-mate-name">Mr. Ivan</h3>
                  <span className="text-left  team-mate-position">Teacher</span>
                </div>
                <div className="team-member">
                  <img variant="top" src={person2}  style={{width: `100%`, height: `264px`}} alt="team-mate"/>
                  <h3 className="text-left team-mate-name">Ms.Marta</h3>
                  <span className="text-left  team-mate-position">Teacher</span>
                </div>
                <div className="team-member">
                  <img variant="top" src={person6}  style={{width: `100%`, height: `264px`}} alt="team-mate"/>
                  <h3 className="text-left team-mate-name">Mr.Bryan</h3>
                  <span className="text-left  team-mate-position">Native speaker</span>
                </div>
              </div>
            }
          </div>
        </div> 
        <div className="team_container_sm" style={{width: `98%`, height: `450px`, position: `relative`}}>
          <div style={{background: `#fafcf3`, width: `100%`, height:`300px`, position: `absolute`, zIndex: `1`}}></div>
            <div className="content_container_sm" style={{ position: `absolute`, zIndex: `5`, top: `60px`}}>
                <div className="team_slide_btn left" role="presentation" onClick={this.slideToLeft} style={{marginBottom:`40px`}}></div>
                {this.state.personCount === 0 && 
                  <div className="team-member">
                    <img variant="top" src={person1}  style={{width: `100%`, height: `264px`}} alt="team-mate"/>
                    <h3 className="text-left team-mate-name">Олеся Ніколаєвич</h3>
                    <span className="text-left  team-mate-position">Засновник Boyar Camp</span>
                  </div>
                }
                {this.state.personCount === 1 && 
                  <div className="team-member">
                    <img variant="top" src={person2}  style={{width: `100%`, height: `264px`}} alt="team-mate"/>
                    <h3 className="text-left team-mate-name">Mr.Jerome</h3>
                    <span className="text-left  team-mate-position">Native speaker</span>
                  </div>
                }
                {this.state.personCount === 2 && 
                  <div className="team-member">
                    <img variant="top" src={person3}  style={{width: `100%`, height: `264px`}} alt="team-mate"/>
                    <h3 className="text-left team-mate-name">Ms.Dominika</h3>
                    <span className="text-left  team-mate-position">Teacher</span>
                  </div>
                }
                {this.state.personCount === 3 && 
                  <div className="team-member">
                    <img variant="top" src={person4}  style={{width: `100%`, height: `264px`}} alt="team-mate"/>
                    <h3 className="text-left team-mate-name">Mr. Fred</h3>
                    <span className="text-left  team-mate-position">Native speaker</span>
                  </div>
                }
                {this.state.personCount === 4 && 
                    <div className="team-member">
                    <img variant="top" src={person5}  style={{width: `100%`, height: `264px`}} alt="team-mate"/>
                    <h3 className="text-left team-mate-name">Mr. Ivan</h3>
                    <span className="text-left  team-mate-position">Teacher</span>
                  </div>
                }
                {this.state.personCount === 5 && 
                    <div className="team-member">
                    <img variant="top" src={person6}  style={{width: `100%`, height: `264px`}} alt="team-mate"/>
                    <h3 className="text-left team-mate-name">Mr.Bryan</h3>
                      <span className="text-left  team-mate-position">Native speaker</span>
                  </div>
                }
              <div className="team_slide_btn right" role="presentation" onClick={this.slideToRight} style={{marginBottom:`40px`}}></div>
            </div>
          </div>
        <Comments />
      </section>
    )
  }
}




