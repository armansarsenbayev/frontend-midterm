import React from 'react';
import MacrosBoard from './MacrosBoard';
import WaterWidget from './WaterWidget';

const Dashboard = ({ consumedCalories, goalCalories, consumedMacros, goalMacros, water, onAddWater }) => {
  return (
    <div className="dashboard-container">
      <div className="title-section">
        <h2>Dashboard</h2>
        <p>Track your daily progress</p>
      </div>
      <MacrosBoard 
        consumedCalories={consumedCalories} 
        goalCalories={goalCalories}
        consumedMacros={consumedMacros}
        goalMacros={goalMacros}
      />
      <WaterWidget currentWater={water} goal={goalMacros.water} onAddWater={onAddWater} />
    </div>
  );
};

export default Dashboard;