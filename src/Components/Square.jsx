import React from 'react'
import "./styles/square.css"

const Square = ({value, onClick})=>{
    return(
      <button type="button" className="Square" onClick={onClick}>{value}</button>
    )
}

export default Square;

