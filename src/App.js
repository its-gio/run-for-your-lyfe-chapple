import React from 'react';
import axios from 'axios'
import './App.css';
import Home from "./components/pages/Home"
import Residents from "./components/pages/Residents"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [],
      page: "home"
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

  render() {
    switch(this.state.page) {
      case "home":
        return <Home changePage={this.changePage} />
      case "residents":
        return <Residents getNewData={this.getNewData} people={this.state.people} />
      default:
        return <Home changePage={this.changePage} />
    }
  }
}

export default App;