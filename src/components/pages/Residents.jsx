import React, { Component } from 'react'
import Header from "../defaults/Header"
import PersonLI from "../Residents/PersonLI"

export default class Residents extends Component {
  render() {
    let residentsList = this.props.people.map((person, i) => <PersonLI key={i} person={person}/>)
    return (
      <div>
        <Header title="Residents" />
        <section className="residents-list">
          <ul>{ residentsList }</ul>
        </section>
      </div>
    )
  }
}