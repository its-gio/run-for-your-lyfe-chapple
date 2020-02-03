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
      available: true,
      decessed: false,
      meal: [],
      skills: {},
    }
  }

  componentDidMount() {
    const { today, meal } = this.createDefault()

    this.setState({ c_in: today, meal });
  }

  postPerson = (e) => {
    e.preventDefault();
    axios
      .post(`/api/people/`, this.state)
      .then(res => this.props.getNewData(res.data))
      .catch(err => console.log(err));
    this.props.showModalToggle();
  }

  createDefault = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = `${mm}/${dd}/${yyyy}`;

    const meal = [{breakfast: false, lunch: false, dinner: false, date: today}]

    return { today, meal };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  changeAvail = () => {
    this.setState({ available: !this.state.available })
  }

  addSkills = (e) => {
    // Forgetting: 4, Remembering: 1, Running: 5
    let skills = e.target.value.split(", ");
    const skillObj = {}
    skills.forEach(skill => {
      let temp = skill.split(": ")
      skillObj[temp[0]] = +temp[1]
    })

    for (let key in skillObj) {
      if (skillObj[key] > 5 || skillObj[key] < 1) return alert("Skill rank to low and/or to high");
    }

    this.setState({ skills: skillObj })
  }
  
  render() {
    let availableColor = this.state.available ? "green" : "red";

    return ReactDOM.createPortal(
      <div onClick={this.props.showModalToggle} className="edit-modal">
        <form onClick={(e) => e.stopPropagation()} >
          <input onChange={this.handleChange} value={ this.state.first_name } name="first_name" placeholder="First Name" />
          <input onChange={this.handleChange} value={ this.state.last_name } name="last_name" placeholder="Last Name" />
          <input onChange={this.handleChange} value={ this.state.c_in } name="c_in" placeholder="mm/dd/yyy" />
          <input onChange={this.handleChange} value={ this.state.c_out } name="c_out" placeholder="mm/dd/yyy"/>
          <input onChange={this.handleChange} value={ this.state.job } name="job" placeholder="job" />
          <span onDoubleClick={this.changeAvail} >Available: <span style={{backgroundColor: availableColor}} className="available"></span></span>
          <span className="skills-container">
            <p>Skill:</p>
            <span className="skills-inputs">
              <textarea onBlur={this.addSkills} placeholder="Skill1: 1-5, Skill2: 1-5, Skill3: 1-5" id="" cols="30" rows="10"></textarea>
            </span>
          </span>
          <button onClick={this.postPerson} >Submit</button>
        </form>
      </div>,
      document.querySelector('#modal')
    )
  }
}