import React from 'react'
import ReactDOM from "react-dom"

export default class PersonLI_D extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }
  
  render() {
    const { first_name, last_name, c_in, c_out, job, available, decessed } = this.props.person;
    let availableColor = available ? "green" : "red";
    return ReactDOM.createPortal(
      <>
        <form onBlur={this.props.sendEdits}>
          <input value={first_name} />
          <input value={last_name} />
          <input value={c_in} />
          <input value={c_out} />
          <span>meals</span>
          <input value={job} />
          <span><span style={{backgroundColor: availableColor}} className="available"></span></span>
          <span>Learn More ></span>
          <span><input checked={ decessed ? "check" : "" } type="checkbox"/></span>
        </form>
        <hr/>
      </>,
      document.querySelector('#modal')
    )
  }

}
