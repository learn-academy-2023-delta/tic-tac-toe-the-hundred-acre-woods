import React from 'react'
import App from '../App'

const Square = (props) => {
    // This entire function is rendering the squares state variable.
  const handleClick = () => {
    // Component call gameHandleClick with correct props pathway.
    {props.gameHandleClick(props.index)}
  }

  return (
    <div className="square" onClick={handleClick}>{props.value}</div>
  )
}
export default Square
