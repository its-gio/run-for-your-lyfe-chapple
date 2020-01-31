import React from 'react'

export default function PersonLiDisplay(props) {
  const { first_name, last_name, c_in, c_out, job, available, decessed } = props.person;
  let availableColor = available ? "green" : "red";

  return (
    <>
      <li onDoubleClick={props.editChange}>
        <span>{first_name}</span>
        <span>{last_name}</span>
        <span>{c_in}</span>
        <span>{c_out ? c_out : "None" }</span>
        <span>meals</span>
        <span>{job}</span>
        <span><span style={{backgroundColor: availableColor}} className="available"></span></span>
        <span>Learn More ></span>
        <span><input readOnly checked={ decessed ? "check" : "" } type="checkbox"/></span>
      </li>
      <hr/>
    </>
  )
}
