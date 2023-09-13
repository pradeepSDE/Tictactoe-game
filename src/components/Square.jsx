
const Square = ({value,onClick, isWinningSquares}) => {
    // console.log(props.value)
    return (<button type="button" 
    className= {`square 
    ${value== 'X'? `text-green`: `text-orange`} ${isWinningSquares ? 'winning' : ''}`} onClick={onClick}>
       {value}
    </button>
    );

    
};

export default Square;