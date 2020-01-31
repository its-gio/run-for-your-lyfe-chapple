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
          <h4><span>First Name</span> <span>Last Name</span> <span>Check-in</span> <span>Check-out</span> <span>Meals</span> <span>Job</span> <span>Available</span> <span>Skills</span> <span></span></h4>
          <ul>{ residentsList }</ul>
        </section>
      </div>
    )
  }
}