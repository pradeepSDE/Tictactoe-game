const StatusMessage = ({winner , isXNext , squares})=>{
    const noMovesLeft = squares.every(squareValue=> squareValue !== null)
    const nextPlayer=(isXNext? 'X':'0')


const renderStatusMessage = ()=>{
    if(winner){
        return <div>winner is <span className={winner== 'X'? 'text-green' : 'text-orange'}> {winner}</span></div>
    }
     if(!winner && noMovesLeft){
         return <div><span className="text-orange">Match Tie!!</span></div>;
        }   

        if(!winner && !noMovesLeft){
            return <div>next player is <span className={isXNext? 'text-green' : 'text-orange'}> {nextPlayer}</span></div>;
        }
        return null;
        
    
};
return <div className="status-message">{renderStatusMessage()}</div>

};

export default StatusMessage;