import React from 'react';
import axios from 'axios'
import './App.css';
import Home from "./components/pages/Home"
import Residents from "./components/pages/Residents"
import Skillz from "./components/pages/Skillz"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [],
      page: "residents",
      personSkillz: {}
    }
  }

  componentDidMount() {
    axios
      .get("/api/people")
      .then(res => this.setState({ people: res.data }))
      .catch(err => console.error(err));
  }

  changePage = (page) => {
    this.setState({ page })
  }

  getNewData = (people) => {
    this.setState({ people })
  }

  getPersonsSkillz = (personSkillz) => {
    this.setState({ personSkillz })
    this.changePage("skillz")
  }

  render() {
    switch(this.state.page) {
      case "home":
        return <Home changePage={this.changePage} />
      case "residents":
        return <Residents getPersonsSkillz={this.getPersonsSkillz} getNewData={this.getNewData} people={this.state.people} />
      case "skillz":
        return <Skillz changePage={this.changePage} getNewData={this.getNewData} personSkillz={this.state.personSkillz} />
      default:
        return <Home changePage={this.changePage} />
    }
  }
}

export default App;