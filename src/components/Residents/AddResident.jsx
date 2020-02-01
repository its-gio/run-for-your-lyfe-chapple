import React from 'react'
import axios from "axios"
import ReactDOM from "react-dom"

export default class AddResident extends React.Component {
  constructor() {
    super();
    
    this.state = {
      first_name: "",
      last_name: "",
      c_in: "",
      c_out: "",
      job: "",
      available: false,
      decessed: false,
      meal: []
    }
  }

  componentDidMount() {
    const { today, meal } = this.createDefault()

    this.setState({ c_in: today, meal });
  }

  createDefault = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = `${mm}/${dd}/${yyyy}`;

    meal = {breakfast: false, lunch: false, dinner: false, date: today}

    return { today, meal };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  changeAvail = () => {
    this.setState({ available: !this.state.available })
  }

  postPerson = () => {
    axios
      .put(`/api/people/`, this.state)
      .then(res => this.props.getNewData(res.data))
      .catch(err => console.log(err));
  }
  
  render() {
    let availableColor = this.state.available ? "green" : "red";

    return ReactDOM.createPortal(
      <div onClick={this.props.sendEdits} className="edit-modal">
        <form onSubmit={this.putPerson} onClick={(e) => e.stopPropagation()} >
          <input onChange={this.handleChange} value={ this.state.first_name } name="first_name" placeholder="First Name" />
          <input onChange={this.handleChange} value={ this.state.last_name } name="last_name" placeholder="Last Name" />
          <input onChange={this.handleChange} value={ this.state.c_in } name="c_in" placeholder="mm/dd/yyy" />
          <input onChange={this.handleChange} value={ this.state.c_out } name="c_out" placeholder="mm/dd/yyy"/>
          <input onChange={this.handleChange} value={ this.state.job } name="job" placeholder="job" />
          <span onDoubleClick={this.changeAvail} >Available: <span style={{backgroundColor: availableColor}} className="available"></span></span>
          <span>Skill: </span>
          <span><input readOnly type="checkbox"/></span>
          <button>submit</button>
        </form>
      </div>,
      document.querySelector('#modal')
    )
  }
}