import React, { Component } from 'react'
import Header from "../defaults/Header"


export default class Home extends Component {
  render() {
    return (
      <div>
        <Header title="Run For Your Lyfe Chapple" />
        <button onClick={() => this.props.changePage("residents")}>See Survivors</button>
      </div>
    )
  }
}
