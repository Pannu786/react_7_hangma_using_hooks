import React from 'react';

const Popup = () => {
  return (
    <div className='popup-container' id='popup-container'>
      <div className='popup'>
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
