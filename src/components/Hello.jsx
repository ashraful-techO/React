import React from 'react'

export default function Hello(props) {
    console.log(props);
  return (
    <div>
        <h3>Hello, <i>{props.name}</i> Good Afternoon <b>{props.heroName}</b></h3>
        {props.children}
        </div>
  )
}
