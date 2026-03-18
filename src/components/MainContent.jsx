import React from 'react';
import ProfileSetup from './ProfileSetup';
import MacrosBoard from './MacrosBoard';
import WaterWidget from './WaterWidget';

const MainContent = () => {
  return (
    <main className="main-content">
      <h2>Calorie & Water Tracker</h2>
      <p>Set up your parameters and track your daily progress.</p>
      
      <div className="dashboard-grid">
        <div className="grid-left">
          <ProfileSetup />
        </div>

        <div className="grid-right">
          <MacrosBoard />
          <WaterWidget />
        </div>
      </div>
    </main>
  );
};

export default MainContent;