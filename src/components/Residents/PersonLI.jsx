import React from 'react'

export default function PersonLI(props) {
  const { first_name, last_name, c_in, c_out, job, meal, available, decessed } = props.person;
  return (
    <>
      <li>
        <span>{first_name}</span>
        <span>{last_name}</span>
        <span>{c_in}</span>
        <span>{c_out ? c_out : "None" }</span>
        <span>meals</span>
        <span>{job}</span>
        <span>{available}</span>
        <span>Learn More ></span>
        <span><input checked={ decessed ? "check" : "" } type="checkbox"/></span>
      </li>
      <hr/>
    </>
  )
}
