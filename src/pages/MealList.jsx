import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMeals, deleteMealAsync } from '../redux/mealsSlice';
import useMeals from '../hooks/useMeals';

const MealList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { meals, loading, error } = useMeals();

  const [searchTerm, setSearchTerm] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  
  useEffect(() => {
    
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchMeals());
    }

    
    return () => {
      isMounted = false;
    };

    
  }, [dispatch]);

  
  
  
  const filteredMeals = useMemo(() =>
    meals.filter(meal =>
      meal.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [meals, searchTerm]
  );

  
  const totalCalories = useMemo(() =>
    filteredMeals.reduce((sum, m) => sum + Number(m.calories), 0),
    [filteredMeals]
  );

  const handleDelete = async (id) => {
    setDeletingId(id);
    await dispatch(deleteMealAsync(id));
    setDeletingId(null);
  };

  
  if (loading && meals.length === 0) {
    return (
      <div className="card" style={{ marginTop: '1.5rem', textAlign: 'center', padding: '40px' }}>
        <div style={{
          width: '40px', height: '40px',
          border: '4px solid #e9ecef',
          borderTop: '4px solid #20c997',
          borderRadius: '50%',
          margin: '0 auto 16px',
          animation: 'spin 0.8s linear infinite'
        }} />
        <p style={{ color: '#6c757d' }}>Loading meals...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  
  if (error) {
    return (
      <div className="card" style={{ marginTop: '1.5rem', textAlign: 'center', padding: '40px' }}>
        <p style={{ fontSize: '2rem', marginBottom: '12px' }}>⚠️</p>
        <h3 style={{ marginBottom: '8px' }}>Failed to load meals</h3>
        <p style={{ color: '#6c757d', marginBottom: '20px' }}>{error}</p>
        <button className="my-btn" onClick={() => dispatch(fetchMeals())}>
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="card meal-list-container" style={{ marginTop: '1.5rem' }}>
      <h3>📋 Today's Meal Diary</h3>

      <div style={{ marginTop: '10px' }}>
        <p style={{ color: '#6c757d', marginBottom: '5px', fontSize: '0.9rem' }}>
          Filter diary meals:
        </p>
        <input
          type="text"
          placeholder="Type name (e.g., apple)..."
          className="weight-input"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="meals-scroll-area">
        {filteredMeals.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <p style={{ fontSize: '2rem', marginBottom: '8px' }}>🍽</p>
            <p style={{ color: '#adb5bd' }}>
              {searchTerm
                ? `No meals matching "${searchTerm}"`
                : 'No meals yet. Add your first meal!'}
            </p>
          </div>
        ) : (
          filteredMeals.map(meal => (
            <div key={meal.id} className="meal-item">
              <div>
                <strong>{meal.name}</strong><br />
                <small style={{ color: '#6c757d' }}>
                  {meal.category} • {meal.calories} kcal
                </small>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <button
                  onClick={() => navigate(`/diary/meal/${meal.id}`)}
                  style={{
                    background: 'none', border: '1px solid #20c997',
                    color: '#20c997', cursor: 'pointer', fontWeight: '600',
                    padding: '4px 10px', borderRadius: '6px', fontSize: '0.85rem'
                  }}
                >
                  Details
                </button>
                <button
                  onClick={() => handleDelete(meal.id)}
                  disabled={deletingId === meal.id}
                  style={{
                    background: 'none', border: 'none',
                    color: deletingId === meal.id ? '#adb5bd' : '#ff4d4f',
                    cursor: deletingId === meal.id ? 'not-allowed' : 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  {deletingId === meal.id ? '...' : 'Delete'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {filteredMeals.length > 0 && (
        <div className="summary-line">
          <strong>Total for current selection: {totalCalories} kcal</strong>
        </div>
      )}
    </div>
  );
};

export default MealList;