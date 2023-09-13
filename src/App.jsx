import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import {calculateWinner} from './winner.js';
import StatusMessage from './components/StatusMessage';
import RefreshButton from './components/resatrtGame';
let  count = 0;
function App() {

  count = count + 1;
  
  const [squares,setSquares]=useState((Array(9).fill(null)))

  const [isXNext,setIsXNext]=useState(false);

  const winner = calculateWinner(squares)


  
  const handlesquareclick = clickedposition =>{

      if (squares[clickedposition] || winner){
          return;
      }
      setSquares(currentSquares=>{
          return (currentSquares.map((squareValue,position)=>{
              if(clickedposition===position){
                  return isXNext? 'X':'0'
              }
                  return squareValue;
          
          })
          )
      });
      setIsXNext(currentIsXNext=>!currentIsXNext);     
      console.log(count)
  }


  return (
    <div className="app">
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
      <Board squares={squares} handlesquareclick={handlesquareclick} />
     <RefreshButton winner={winner} count={count} />
      
    </div>
   
  );
}

export default App;
