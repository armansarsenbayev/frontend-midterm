import React from 'react';

const MacroRow = ({ label, percent, value }) => {
  return (
    <div className="macro-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <p style={{ fontWeight: '600' }}>{label}</p>
        <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>{value}</p>
      </div>
      <div style={{ width: '100px', height: '10px', background: '#e9ecef', borderRadius: '5px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ width: percent, height: '100%', background: '#20c997', borderRadius: '5px' }}></div>
      </div>
    </div>
  );
};

export default MacroRow;