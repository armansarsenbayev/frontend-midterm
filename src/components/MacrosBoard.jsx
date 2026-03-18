import React from 'react';
import MacroRow from './MacroRow';

const MacrosBoard = () => {
  return (
    <div className="card macros-board">
      <div className="macros-header">
        <div className="calories-circle">
          <h2>0</h2>
          <p>kcal left</p>
        </div>
        <div className="macros-list">
          <MacroRow label="Proteins" percent="10%" value="13 / 130 g" />
          <MacroRow label="Fats" percent="0%" value="0 / 58 g" />
          <MacroRow label="Carbs" percent="0%" value="0 / 314 g" />
        </div>
      </div>
    </div>
  );
};

export default MacrosBoard;