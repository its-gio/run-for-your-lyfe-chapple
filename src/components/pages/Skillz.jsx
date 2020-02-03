import React, { Component } from 'react'
import Header from "../defaults/Header"

export default class Skillz extends Component {
  render() {
    const { first_name,  } = this.props.personSkillz;

    return (
      <div>
        <button className="residentsBackBtn" onClick={() => this.props.changePage("residents")}>{"<"}</button>
        <Header title={`${first_name}'s Skillz`} />
        <section className="skillz-list">
        </section>
      </div>
    )
  }
}