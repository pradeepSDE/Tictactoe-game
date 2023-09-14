// src/components/RefreshButton.js
import React from 'react';

function RefreshButton( {winner,count}) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <button onClick={handleRefresh}
    className={`btn-reset ${winner || count==20 ? `active` : `` }`}> 
       <b>Restart game</b>
    </button>
  );
}

export default RefreshButton;
