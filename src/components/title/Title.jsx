import React from 'react'
import './Title.css'
const Title = (props) => {
  let first = props.first;
  let second = props.second;
  let third = props.third;
  return (
    <>
      <div className="comp-title">
        <h5>{first}</h5>
        <h3>{second}</h3>
        <h5>{third}</h5>
      </div>
    </>
  )
}

export default Title