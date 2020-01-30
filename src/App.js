import React from 'react';
import axios from 'axios'
import './App.css';

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      people: []
    }
  }

  componentDidMount() {
    axios
      .get("/api/people")
      .then(res => this.setState({ people: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        Working
      </div>
    );
  }
}

export default App;