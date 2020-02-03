import React from 'react'

export default function PersonLiDisplay(props) {
  const { first_name, last_name, c_in, c_out, job } = props.person;

  let circleColor = (key) => {
    if (key === "available") return props.person[key] ? "green" : "red";

    return props.person.meal[0][key] ? "green" : "red";
  }

  return (
    <>
      <li onDoubleClick={props.enableEdit}>
        <span>{first_name}</span>
        <span>{last_name}</span>
        <span>{c_in}</span>
        <span>{c_out ? c_out : "None" }</span>
        <span className="meals">
          <span className="meal">B: <span style={{backgroundColor: circleColor("breakfast")}} className="meal--eaten"></span></span>
          <span className="meal">L: <span style={{backgroundColor: circleColor("lunch")}} className="meal--eaten"></span></span>
          <span className="meal">D: <span style={{backgroundColor: circleColor("dinner")}} className="meal--eaten"></span></span>
        </span>
        <span>{job}</span>
        <span><span style={{backgroundColor: circleColor("available")}} className="available"></span></span>
        <span>Learn More ></span>
      </li>
      <hr/>
    </>
  )
}
