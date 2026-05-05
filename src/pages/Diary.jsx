import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Diary = () => {
  return (
    <div className="dashboard-container">
      <div className="title-section">
        <h2>Meal Diary</h2>
        <p>Manage your meals</p>
      </div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
        <Link to="/diary/list" className="my-btn" style={{ textAlign: 'center', textDecoration: 'none' }}>View Meals</Link>
        <Link to="/diary/add" className="my-btn" style={{ textAlign: 'center', textDecoration: 'none', backgroundColor: '#343a40' }}>Add Meal</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Diary;