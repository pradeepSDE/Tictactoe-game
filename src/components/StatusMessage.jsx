const StatusMessage = ({winner , isXNext , squares})=>{
    const noMovesLeft = squares.every(squareValue=> squareValue !== null)
    const nextPlayer=(isXNext? 'X':'0')


const renderStatusMessage = ()=>{
    if(winner){
        return <div>winner is {winner}</div>
    }
     if(!winner && noMovesLeft){
         return <div>Match Tie!!</div>;
        }   

        if(!winner && !noMovesLeft){
            return <div>next player is {nextPlayer}</div>;
        }
        return null;
        
    
};
return <div className="status-message">{renderStatusMessage()}</div>

};

export default StatusMessage;