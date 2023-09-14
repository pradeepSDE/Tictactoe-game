import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import {calculateWinner} from './winner.js';
import StatusMessage from './components/StatusMessage';
import RefreshButton from './components/resatrtGame';

import WinnerParty from './components/winnerparty';

let  count = 0;
function App() {

    //  winnerparty();

  count = count + 1;
  
  const [squares,setSquares]=useState((Array(9).fill(null)))

  const [isXNext,setIsXNext]=useState(false);

  const {winner,winningSquares} = calculateWinner(squares)

     console.log(winner)
  
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
      console.log(winner)

     

  }

  
  return (
    <div className="app">

        <div className="bg-balls"></div>
        
       <h1>TIC <span className='text-orange'>TAC</span> TOE</h1>
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
      <Board squares={squares} handlesquareclick={handlesquareclick}  winningSquares={winningSquares}/>
     <RefreshButton winner={winner} count={count} />
    <WinnerParty winner={winner}/>

      
    </div>
   
  );
  
}

export default App;
