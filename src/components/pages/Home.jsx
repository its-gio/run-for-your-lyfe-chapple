import React, { Component } from 'react'
import Header from "../defaults/Header"
import { BangalowCloseup, BangalowCloseup2, BeachShot, Outdoor, PoolArea, ResortOverview } from "../defaults/Images";


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home--loggin">
          <Header title="Run For Your Lyfe Chapple" />
          <button onClick={() => this.props.changePage("residents")}>See Survivors</button>
        </div>
        <div className="image-grid">
          <img src={Outdoor} alt=""/>
          <img src={ResortOverview} alt=""/>
          <img src={BangalowCloseup} alt=""/>
          <img src={PoolArea} alt=""/>
          <img src={BangalowCloseup2} alt=""/>
          <img src={BeachShot} alt=""/>
        </div>
      </div>
    )
  }
}
