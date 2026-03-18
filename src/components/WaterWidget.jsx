import React from 'react';
import WaterButton from './WaterButton';

const WaterWidget = () => {
  const handleAddWater = (amount) => {
    alert(`You added ${amount} ml of water!`);
  };


  return (
    <div className="card water-widget">
      <div className="water-header">
        <h3>💧 Water</h3>
        <p className="water-total">0 ml <span>/ 2160 ml</span></p>
      </div>
      
      <div className="water-buttons">
        <WaterButton amount="100" onClick={() => handleAddWater(100)} />
        <WaterButton amount="200" onClick={() => handleAddWater(200)} />
        <WaterButton amount="250" onClick={() => handleAddWater(250)} />
        <WaterButton amount="500" onClick={() => handleAddWater(500)} />
      </div>
    </div>
  );
};

export default WaterWidget;