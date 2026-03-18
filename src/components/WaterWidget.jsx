import React, { useState } from 'react';

const WaterWidget = ({ currentWater, goal, onAddWater }) => {
  const [customAmount, setCustomAmount] = useState('');

  const handleCustomAdd = () => {
    if (customAmount && Number(customAmount) > 0) {
      onAddWater(Number(customAmount));
      setCustomAmount('');
    }
  };

  return (
    <div className="card water-widget">
      <div className="water-header">
        <h3>💧 Water Tracker</h3>
        <p className="water-total" style={{ margin: '10px 0', fontSize: '1.2rem', fontWeight: 'bold' }}>
          {currentWater} ml <span style={{ fontSize: '1rem', color: '#adb5bd', fontWeight: 'normal' }}>/ {goal} ml</span>
        </p>
      </div>
      
      <div className="water-buttons" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
        <button className="water-add-btn" onClick={() => onAddWater(100)} style={{ flex: 1, padding: '10px', cursor: 'pointer', border: '1px solid #ced4da', borderRadius: '8px', background: 'white' }}>+ 100 ml</button>
        <button className="water-add-btn" onClick={() => onAddWater(250)} style={{ flex: 1, padding: '10px', cursor: 'pointer', border: '1px solid #ced4da', borderRadius: '8px', background: 'white' }}>+ 250 ml</button>
        <button className="water-add-btn" onClick={() => onAddWater(500)} style={{ flex: 1, padding: '10px', cursor: 'pointer', border: '1px solid #ced4da', borderRadius: '8px', background: 'white' }}>+ 500 ml</button>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="number" 
          placeholder="Custom ml" 
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className="weight-input"
          style={{ flex: 1, marginBottom: '0' }}
        />
        <button className="my-btn" onClick={handleCustomAdd} style={{ margin: 0, padding: '10px 20px', width: 'auto' }}>
          Add
        </button>
      </div>
    </div>
  );
};

export default WaterWidget;