import React, { Component } from 'react'
import Header from "../defaults/Header"

export default class Skillz extends Component {
  render() {
    return (
      <div>
        <Header title="Skillz" />
        <section className="residents-list">
          <h4><span>First Name</span> <span>Last Name</span> <span>Check-in</span> <span>Check-out</span> <span>Meals</span> <span>Job</span> <span>Available</span> <span>Skills</span></h4>
        </section>
      </div>
    )
  }
}