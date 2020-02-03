import React, { Component } from 'react'
import Header from "../defaults/Header"
import PersonLI from "../Residents/PersonLi"
import AddResident from "../Residents/AddResident"

export default class Residents extends Component {
  constructor() {
    super();

    this.state = {
      addModalShow: false
    }
  }

  showModalToggle = () => {
    this.setState({ addModalShow: !this.state.addModalShow })
  }
  
  render() {
    let residentsList = this.props.people.map((person, i) => <PersonLI changePage={this.props.changePage} getNewData={this.props.getNewData} key={i} person={person}/>)
    return (
      <div>
        <Header title="Residents" />
        <section className="residents-list">
          <h4><span>First Name</span> <span>Last Name</span> <span>Check-in</span> <span>Check-out</span> <span>Meals</span> <span>Job</span> <span>Available</span> <span>Skills</span></h4>
          <ul>{ residentsList }</ul>
        </section>

        { this.state.addModalShow ? <AddResident getNewData={this.props.getNewData} showModalToggle={this.showModalToggle} /> : ""}
        <button onClick={this.showModalToggle} className="add-resident">+</button>
      </div>
    )
  }
}