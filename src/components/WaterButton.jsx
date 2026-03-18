import React from 'react';

const WaterButton = (props) => {
  return (
    <button className="water-add-btn" onClick={props.onClick}>
      + {props.amount} ml
    </button>
  );
};

export default WaterButton;