import React from 'react';

const About = () => {
  return (
    <div className="dashboard-container">
      <div className="title-section">
        <h2>About MacroFit</h2>
        <p>Learn more about this app</p>
      </div>
      <div className="card">
        <h3>ℹ️ Application Info</h3>
        <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
          MacroFit is a Single Page Application built with React and React Router. 
          It helps users track their daily macronutrients, water intake, and calories.
          Calculations are based on the Mifflin-St Jeor equation.
        </p>
      </div>
    </div>
  );
};

export default About;