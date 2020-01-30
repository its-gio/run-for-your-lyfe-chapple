import React from 'react';
import axios from 'axios'
import './App.css';
import Home from "./components/pages/Home"
import Residents from "./components/pages/Residents"

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;

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

  render() {
    switch(this.state.page) {
      case "home":
        return <Residents people={this.state.people} />
      case "residents":
        return <Home changePage={this.changePage} />
      default:
        return <Home changePage={this.changePage} />
    }
  }
}

export default App;