import React, { useState } from 'react';

const MealList = ({ meals, onDeleteMeal }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMeals = meals.filter(meal => 
    meal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCalories = filteredMeals.reduce((sum, meal) => sum + meal.calories, 0);

  return (
    <div className="card meal-list-container" style={{ marginTop: '1.5rem' }}>
      <h3>📋 Meal Log</h3>

      <input 
        type="text"
        placeholder="Search by name..."
        className="weight-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '15px' }}
      />

      <div className="meals-scroll-area" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <div key={meal.id} className="meal-item" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '10px', 
              borderBottom: '1px solid #eee' 
            }}>
              <div>
                <strong>{meal.name}</strong> <br />
                <small style={{ color: '#6c757d' }}>{meal.category} • {meal.calories} kcal</small>
              </div>
              <button 
                onClick={() => onDeleteMeal(meal.id)} 
                style={{ background: 'none', border: 'none', color: '#ff4d4f', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p style={{ color: '#adb5bd', textAlign: 'center' }}>No meals found</p>
        )}
      </div>

      <div style={{ marginTop: '15px', borderTop: '2px solid #20c997', paddingTop: '10px' }}>
        <strong>Total for selection: {totalCalories} kcal</strong>
      </div>
    </div>
  );
};

export default MealList;