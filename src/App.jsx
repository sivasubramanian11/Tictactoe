/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
import React,{useState} from "react";
import Board from "./Components/Board";
import "./Components/styles/app.css"
import { calculateWinner } from "./helper";

const App=()=> {
    const [board,setBoard]= useState(Array(9).fill(null));
    const [isNextX, setIsNextX] = useState(false);
    
    const winner = calculateWinner(board);
    
    const message = winner ? `Winner is ${winner}`: `Next Player is ${isNextX ? 'X' : 'O'}`;

    const handleSquareClick = position=>{
      if(board[position] || winner ){
      return;
      }
    
    setBoard(prev=>{
      return prev.map((square,pos)=>{
        if(pos === position){
          return isNextX ?'X' : '0';
        }
        return square;
      })
    
    })
    
    setIsNextX(prev=>!prev)
    }
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{ message }</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>);
}

export default App;

  


