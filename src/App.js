import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  
  const gameHandleClick = (index) => {
    // Declare new variable called updateBoard. Duplicate Array from line 5.
    let updateBoard = [...squares]
    // Give value to index(our parameter).
    updateBoard[index] = "❌"
    // Within the argument of setSquares, insert updateBoard[index]. This updates our state variable squares, our value in line 25.
    setSquares(updateBoard)
    // let nextSquare = updateBoard
    // if (squares){
    //    nextSquare = "❌"

    // } else {
    //   nextSquare = "⭕️"
    // } 
    // setSquares(nextSquare)
    //console.log(abc)
}
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='gameboard'>
        {squares.map((value, index) => {
          return (
          <Square
          value={value}
          index={index}
          gameHandleClick={gameHandleClick}
          key={index}/>)
          })}
          
          </div>
      </>
  )
}

export default App