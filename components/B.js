import React from 'react'
import C from './C'

export default function B(props) {
  return (
     <>
        <div>B Component {props.name}  {props.msg}</div>
        <C name={props.name} msg={props.msg}/>
    </>
  )
}
