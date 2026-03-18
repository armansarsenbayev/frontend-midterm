import React from 'react';

const MacroRow = (props) => {
  return (
    <div className="macro-row">
      <span className="macro-label">{props.label}</span>
      <div className="macro-bar-bg">
        <div className="macro-bar-fill" style={{ width: props.percent }}></div>
      </div>
      <span className="macro-value">{props.value}</span>
    </div>
  );
};

export default MacroRow;