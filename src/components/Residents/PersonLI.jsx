import React from 'react';
import PersonLiDisplay from "./PersonLiDisplay";
import PersonLiEdit from "./PersonLiEdit";

export default class PersonLI extends React.Component {
  constructor() {
    super();

    this.state = {
      edit: false
    }
  }

  enableEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  render () {
    return (
      <>
        <PersonLiDisplay enableEdit={this.enableEdit} person={this.props.person} />
        { this.state.edit ? <PersonLiEdit getNewData={this.props.getNewData} enableEdit={this.enableEdit} person={this.props.person} /> : ""}
      </>
    )
  }
}
