import Confetti from "react-confetti";
 
const WinnerParty =({winner})=>{
 
   const party = ()=>{
    if(winner){
        return <div>  <Confetti/>    </div>
       }

       return null;
   }
    
   return <div> {party()}</div>;

};

export default WinnerParty;