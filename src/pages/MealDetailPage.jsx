import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const MealDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const meals = useSelector(state => state.meals.items);

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  const meal = meals.find(m => String(m.id) === String(id));

  if (!meal) {
    return (
      <div className="dashboard-container" style={{ paddingTop: '40px' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <h3>🍽 Meal not found</h3>
          <p style={{ color: '#6c757d', margin: '12px 0 20px' }}>
            This meal doesn't exist or was deleted.
          </p>
          <button className="my-btn" onClick={() => navigate('/diary/list')}>
            Back to Diary
          </button>
        </div>
      </div>
    );
  }

  const proteinCal = meal.protein * 4;
  const fatCal = meal.fat * 9;
  const carbsCal = meal.carbs * 4;
  const totalMacroCal = proteinCal + fatCal + carbsCal;
  const getPercent = (cal) => totalMacroCal === 0 ? 0 : Math.round((cal / totalMacroCal) * 100);

  const macros = [
    { label: 'Protein', g: meal.protein, cal: proteinCal, color: '#4dabf7' },
    { label: 'Fat', g: meal.fat, cal: fatCal, color: '#ff8787' },
    { label: 'Carbs', g: meal.carbs, cal: carbsCal, color: '#20c997' },
  ];

  return (
    <div className="dashboard-container" style={{ paddingTop: '20px' }}>

      <div style={{ fontSize: '0.9rem', color: '#6c757d', marginBottom: '10px' }}>
        <span onClick={() => navigate('/diary/list')} style={{ cursor: 'pointer', color: '#20c997' }}>
          Diary
        </span>
        {' → '}{meal.name}
      </div>

      <div className="title-section">
        <h2>{meal.name}</h2>
        <p>{meal.category}</p>
      </div>

      <div className="card" style={{ textAlign: 'center' }}>
        <p style={{ color: '#6c757d', marginBottom: '6px', fontSize: '0.9rem' }}>Total calories</p>
        <h2 style={{ fontSize: '3rem', color: '#20c997' }}>{meal.calories}</h2>
        <p style={{ color: '#6c757d' }}>kcal</p>
      </div>

      <div className="card">
        <h3>💊 Macronutrients</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          {macros.map(({ label, g, cal, color }) => (
            <div key={label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontWeight: '600' }}>{label}</span>
                <span style={{ color: '#6c757d' }}>{g} g — {getPercent(cal)}%</span>
              </div>
              <div style={{ height: '10px', background: '#e9ecef', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: `${getPercent(cal)}%`, height: '100%', background: color, borderRadius: '5px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>📋 Details</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          {[
            { label: 'Meal name', value: meal.name },
            { label: 'Category', value: meal.category },
            { label: 'Calories', value: `${meal.calories} kcal` },
            { label: 'Protein', value: `${meal.protein} g` },
            { label: 'Fat', value: `${meal.fat} g` },
            { label: 'Carbohydrates', value: `${meal.carbs} g` },
          ].map(({ label, value }) => (
            <div key={label} style={{
              display: 'flex', justifyContent: 'space-between',
              paddingBottom: '12px', borderBottom: '1px solid #f1f5f9'
            }}>
              <span style={{ color: '#6c757d' }}>{label}</span>
              <span style={{ fontWeight: '600' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="my-btn" onClick={() => navigate('/diary/list')} style={{ marginBottom: '40px' }}>
        ← Back to Diary
      </button>

    </div>
  );
};

export default MealDetailPage;
