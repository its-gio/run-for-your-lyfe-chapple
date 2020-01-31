import React from 'react';
import PersonLI_D from "./PersonLI_D";
import PersonLI_E from "./PersonLI_E";

export default class PersonLI extends React.Component{
  constructor() {
    super();

    this.state = {
      person: {},
      edit: false
    }
  }

  componentDidMount() {
    this.setState({ person: {...this.props.person} })
  }

  editChange = (e) => {
    this.setState({ edit: !this.state.edit })
  }

  sendEdits = () => {
    this.editChange()
  }

  render () {
    return <PersonLI_D editChange={this.editChange} person={this.state.person} />
  }
}
