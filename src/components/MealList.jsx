import React, { useState } from 'react';

const MealList = ({ meals, onDeleteMeal }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMeals = meals.filter(meal => 
    meal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCalories = filteredMeals.reduce((sum, meal) => sum + meal.calories, 0);

  return (
    <div className="card meal-list-container" style={{ marginTop: '1.5rem' }}>
      <h3>📋 Today's Meal Diary</h3>
      <div style={{ marginTop: '10px' }}>
        <p style={{ color: '#6c757d', marginBottom: '5px', fontSize: '0.9rem' }}>Filter diary meals:</p>
        <input 
          type="text"
          placeholder="Type name (e.g., apple)..."
          className="weight-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="meals-scroll-area">
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <div key={meal.id} className="meal-item">
              <div>
                <strong>{meal.name}</strong> <br />
                <small style={{ color: '#6c757d' }}>{meal.category} • {meal.calories} kcal</small>
              </div>
              <button 
                onClick={() => onDeleteMeal(meal.id)} 
                style={{ background: 'none', border: 'none', color: '#ff4d4f', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p style={{ color: '#adb5bd', textAlign: 'center', padding: '20px 0' }}>No meals found in your diary selection.</p>
        )}
      </div>
      <div className="summary-line">
        <strong>Total for current selection: {totalCalories} kcal</strong>
      </div>
    </div>
  );
};

export default MealList;