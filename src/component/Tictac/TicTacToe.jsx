import React from 'react'
import  './TicTacToe.css'
// import circle_icon from '../assets/circle_icon'
// import cross_icon from '../assets/cross_icon'
const TicTacToe = () => {
  return (
    <div className='container'>
       <h className="title"> Tic Tac Toe Game In <span>React</span></h>
       <div className="board">

       </div>
       <button className="reset">
        Reset
       </button>
    </div>
  )
}

export default TicTacToe