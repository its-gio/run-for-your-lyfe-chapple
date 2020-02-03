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
      meal: [{breakfast: false, lunch: false, dinner: false}]
    }
  }
  
  componentDidMount() {
    const { id, first_name, last_name, c_in, c_out, job, available, meal } = this.props.person;
    this.setState({ id, first_name, last_name, c_in, c_out, job, available, meal })
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

  mealEdit = (meal) => {
    this.setState(currState => {
      let tempStateMeal = {...currState.meal[0]}
      let tempStateMealArr = [...currState.meal]
      tempStateMeal[meal] = !tempStateMeal[meal]

      tempStateMealArr.splice(0,1,tempStateMeal)
      return { meal: tempStateMealArr }
    })
  }

  circleColor = (key) => {
    if (key === "available") return this.state[key] ? "green" : "red";

    return this.state.meal[0][key] ? "green" : "red";
  }

  render() {
    return ReactDOM.createPortal(
      <div onClick={this.props.enableEdit} className="edit-modal">
        {/* onSubmit={this.putPerson} */}
        <form onClick={(e) => e.stopPropagation()} >
          <input onChange={this.handleChange} value={ this.state.first_name } name="first_name" placeholder="First Name" />
          <input onChange={this.handleChange} value={ this.state.last_name } name="last_name" placeholder="Last Name" />
          <input onChange={this.handleChange} value={ this.state.c_in } name="c_in" placeholder="mm/dd/yyy" />
          <input onChange={this.handleChange} value={ this.state.c_out } name="c_out" placeholder="mm/dd/yyy"/>
          <span className="meals">
            <span onDoubleClick={() => this.mealEdit("breakfast")} className="meal">B: <span style={{backgroundColor: this.circleColor("breakfast")}} className="meal--eaten"></span></span>
            <span onDoubleClick={() => this.mealEdit("lunch")} className="meal">L: <span style={{backgroundColor: this.circleColor("lunch")}} className="meal--eaten"></span></span>
            <span onDoubleClick={() => this.mealEdit("dinner")} className="meal">D: <span style={{backgroundColor: this.circleColor("dinner")}} className="meal--eaten"></span></span>
          </span>
          <input onChange={this.handleChange} value={ this.state.job } name="job" placeholder="job" />
          <span onDoubleClick={this.changeAvail}>Available: <span style={{backgroundColor: this.circleColor("available")}} className="available"></span></span>
          <span className="skillsBtn" onClick={() => this.props.person(this.props.person)}>Skill ></span>
          <p>Remove: <input checked={false} onChange={this.deletePerson} type="checkbox"/></p>
          <button onClick={this.putPerson}>Submit</button>
        </form>
      </div>,
      document.querySelector('#modal')
    )
  }
}
