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
      decessed: false
    }
  }
  
  componentDidMount() {
    const { id, first_name, last_name, c_in, c_out, job, available, decessed } = this.props.person;
    this.setState({ id, first_name, last_name, c_in, c_out, job, available, decessed  })
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  changeAvail = () => {
    this.setState({ available: !this.state.available })
  }

  putPerson = () => {
    axios
      .put(`/api/people/${this.state.id}`, this.state)
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
          <span>Meals</span>
          <input onChange={this.handleChange} value={ this.state.job } name="job" placeholder="job" />
          <span onDoubleClick={this.changeAvail} >Available: <span style={{backgroundColor: availableColor}} className="available"></span></span>
          <span>Skill</span>
          {/* <span><input checked={ this.state.decessed ? "check" : "" } type="checkbox"/></span> */}
          <button>submit</button>
        </form>
      </div>,
      document.querySelector('#modal')
    )
  }

}
