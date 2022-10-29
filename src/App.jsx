
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from "react";
import Board from "./Components/Board";
import "./Components/styles/app.css"
import { calculateWinner } from "./helper";
import History from "./Components/history"
import  StatusMessage from "./Components/statusMessage";


const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNextX: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  
  const winner = calculateWinner(current.board);

  
  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isNextX ? 'X' : '0';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isNextX: !last.isNextX });

    })
    setCurrentMove(prev => prev + 1);
  }
  const moveTo =()=>{
    setCurrentMove(moveTo)
  }
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
     <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
    );
}
export default App;




