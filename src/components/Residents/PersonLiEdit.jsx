import React from 'react'
import axios from "axios"
import ReactDOM from "react-dom"

export default class PersonLiEdit extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      first_name: "",
      last_name: "",
      c_in: "",
      c_out: "",
      job: "",
      available: false,
    }
  }
  
  componentDidMount() {
    const { id, first_name, last_name, c_in, c_out, job, available } = this.props.person;
    this.setState({ id, first_name, last_name, c_in, c_out, job, available  })
  }

  deletePerson = () => {
    let decessedBool = prompt("Is this person decessed?", "Yes or No");
    if (!decessedBool) return;
    if (decessedBool.toLowerCase() === "yes" || decessedBool.toLowerCase() === "no") {
      axios
        .delete(`/api/people/${this.state.id}/${decessedBool}`)
        .then(res => this.props.getNewData(res.data))
        .catch(err => console.error(err));
      this.props.enableEdit();
    }
  }

  putPerson = (e) => {
    // BUG!!! Refresh to homepage when submit.
    e.preventDefault();
    axios
      .put(`/api/people/${this.state.id}`, this.state)
      .then(res => this.props.getNewData(res.data))
      .catch(err => console.log(err));
    this.props.enableEdit();
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  changeAvail = () => {
    this.setState({ available: !this.state.available })
  }

  render() {
    let availableColor = this.state.available ? "green" : "red";

    return ReactDOM.createPortal(
      <div onClick={this.props.enableEdit} className="edit-modal">
        {/* onSubmit={this.putPerson} */}
        <form onClick={(e) => e.stopPropagation()} >
          <input onChange={this.handleChange} value={ this.state.first_name } name="first_name" placeholder="First Name" />
          <input onChange={this.handleChange} value={ this.state.last_name } name="last_name" placeholder="Last Name" />
          <input onChange={this.handleChange} value={ this.state.c_in } name="c_in" placeholder="mm/dd/yyy" />
          <input onChange={this.handleChange} value={ this.state.c_out } name="c_out" placeholder="mm/dd/yyy"/>
          <span>Meals</span>
          <input onChange={this.handleChange} value={ this.state.job } name="job" placeholder="job" />
          <span onDoubleClick={this.changeAvail} >Available: <span style={{backgroundColor: availableColor}} className="available"></span></span>
          <span>Skill</span>
          <p>Remove: <input checked={false} onChange={this.deletePerson} type="checkbox"/></p>
          <button onClick={this.putPerson}>Submit</button>
        </form>
      </div>,
      document.querySelector('#modal')
    )
  }

}
