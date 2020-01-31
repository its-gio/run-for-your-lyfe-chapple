import React from 'react';
import PersonLiDisplay from "./PersonLiDisplay";
import PersonLiEdit from "./PersonLiEdit";

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
    return (
      <>
        <PersonLiDisplay editChange={this.editChange} person={this.state.person} />
        { this.state.edit ? <PersonLiEdit getNewData={this.props.getNewData} sendEdits={this.sendEdits} person={this.state.person} /> : ""}
      </>
    )
  }
}
