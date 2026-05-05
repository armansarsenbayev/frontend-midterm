import React from 'react';
import { useDispatch } from 'react-redux';
import { addWater, resetWater } from '../redux/waterSlice';
import useLocalStorage from '../hooks/useLocalStorage';

const WaterWidget = ({ currentWater, goal }) => {
  const dispatch = useDispatch();

  
  const [customAmount, setCustomAmount] = useLocalStorage('lastCustomWater', '');

  const handleAdd = (amount) => {
    dispatch(addWater(amount));
  };

  const handleCustomAdd = () => {
    if (customAmount && Number(customAmount) > 0) {
      dispatch(addWater(Number(customAmount)));
      setCustomAmount('');
    }
  };

  const percent = Math.min(Math.round((currentWater / goal) * 100), 100);

  return (
    <div className="card water-widget">
      <h3>💧 Water Tracker</h3>
      <p style={{ margin: '10px 0', fontSize: '1.2rem', fontWeight: 'bold' }}>
        {currentWater} ml{' '}
        <span style={{ fontSize: '1rem', color: '#adb5bd', fontWeight: 'normal' }}>
          / {goal} ml
        </span>
      </p>

      <div style={{
        height: '8px', background: '#e9ecef',
        borderRadius: '4px', overflow: 'hidden', marginBottom: '16px'
      }}>
        <div style={{
          width: `${percent}%`, height: '100%',
          background: '#4dabf7', borderRadius: '4px',
          transition: 'width 0.3s ease'
        }} />
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
        {[100, 250, 500].map(amount => (
          <button key={amount} onClick={() => handleAdd(amount)} style={{
            flex: 1, padding: '10px', cursor: 'pointer',
            border: '1px solid #ced4da', borderRadius: '8px', background: 'white'
          }}>
            + {amount} ml
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="number"
          placeholder="Custom ml"
          value={customAmount}
          onChange={e => setCustomAmount(e.target.value)}
          className="weight-input"
          style={{ flex: 1, marginBottom: 0 }}
        />
        <button className="my-btn" onClick={handleCustomAdd}
          style={{ margin: 0, padding: '10px 20px', width: 'auto' }}>
          Add
        </button>
      </div>

      {currentWater >= goal && (
        <p style={{ color: '#20c997', textAlign: 'center', marginTop: '12px', fontWeight: '600' }}>
          ✅ Daily water goal reached!
        </p>
      )}

      <button
        onClick={() => dispatch(resetWater())}
        style={{
          background: 'none', border: 'none', color: '#adb5bd',
          cursor: 'pointer', marginTop: '10px', fontSize: '0.85rem', width: '100%'
        }}
      >
        Reset water for today
      </button>
    </div>
  );
};

export default WaterWidget;