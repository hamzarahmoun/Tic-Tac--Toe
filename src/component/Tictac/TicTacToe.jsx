import React from 'react'
import  './TicTacToe.css'
// import circle_icon from '../assets/circle_icon'
// import cross_icon from '../assets/cross_icon'
const TicTacToe = () => {
  return (
    <div className='container'>
       <h className="title"> Tic Tac Toe Game In <span>React</span></h>
       <div className="board">
        <div className="row1">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
        </div>
        <div className="row2">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
        </div>
        <div className="row3">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
        </div>

       </div>
       <button className="reset">
        Reset
       </button>
    </div>
  )
}

export default TicTacToe