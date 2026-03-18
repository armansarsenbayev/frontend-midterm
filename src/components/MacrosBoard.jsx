import React from 'react';
import MacroRow from './MacroRow';

const MacrosBoard = ({ consumedCalories, goalCalories, consumedMacros, goalMacros }) => {
  const remaining = goalCalories - consumedCalories;

  const calculatePercent = (consumed, goal) => {
    if (goal === 0) return '0%';
    const percent = Math.min((consumed / goal) * 100, 100);
    return `${Math.round(percent)}%`;
  };

  return (
    <div className="card macros-board">
      <div className="macros-header">
        <div className="calories-circle" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '2.5rem' }}>{remaining > 0 ? remaining : 0}</h2>
          <p style={{ color: '#6c757d' }}>kcal left</p>
        </div>
        
        <div className="macros-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <MacroRow 
            label="Protein" 
            percent={calculatePercent(consumedMacros.protein, goalMacros.protein)} 
            value={`${consumedMacros.protein} / ${goalMacros.protein} g`} 
          />
          <MacroRow 
            label="Fat" 
            percent={calculatePercent(consumedMacros.fat, goalMacros.fat)} 
            value={`${consumedMacros.fat} / ${goalMacros.fat} g`} 
          />
          <MacroRow 
            label="Carbs" 
            percent={calculatePercent(consumedMacros.carbs, goalMacros.carbs)} 
            value={`${consumedMacros.carbs} / ${goalMacros.carbs} g`} 
          />
        </div>
      </div>
    </div>
  );
};

export default MacrosBoard;