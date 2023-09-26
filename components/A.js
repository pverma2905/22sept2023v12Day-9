import React from 'react'
import B from './B'

export default function A(props) {
  return (
    <>
        <div>A Component {props.name}  {props.msg}</div>
        <B name={props.name} msg={props.msg} />
    </>
  )

}