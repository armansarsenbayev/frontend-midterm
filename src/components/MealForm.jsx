import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMealAsync } from '../redux/mealsSlice';
import Toast from './Toast';

const MealForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.meals.loading);

  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein,  setProtein]  = useState('');
  const [fat,      setFat]      = useState('');
  const [carbs,    setCarbs]    = useState('');
  const [category, setCategory] = useState('Breakfast');
  const [error,    setError]    = useState('');
  const [toast,    setToast]    = useState({ message: '', type: 'success' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!mealName.trim() || !calories) {
      setError('❌ Please fill in the name and calories!');
      return;
    }
    if (Number(calories) <= 0) {
      setError('❌ Calories must be greater than zero!');
      return;
    }

    const newMeal = {
      name: mealName.trim(), calories: Number(calories),
      protein: Number(protein) || 0, fat: Number(fat) || 0,
      carbs: Number(carbs) || 0, category,
    };

    const result = await dispatch(addMealAsync(newMeal));

    if (addMealAsync.fulfilled.match(result)) {
      setToast({ message: '✅ Meal added successfully!', type: 'success' });
      setMealName(''); setCalories(''); setProtein('');
      setFat(''); setCarbs(''); setCategory('Breakfast');
    } else {
      setToast({ message: `❌ Failed to save: ${result.payload}`, type: 'error' });
    }
  };

  return (
    <div className="card meal-form-container">
      <h3>➕ Add Meal</h3>

      {error && (
        <p style={{ color: '#ff4d4f', fontSize: '0.9rem', marginBottom: '10px', textAlign: 'center' }}>
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="meal-form">
        <input type="text"   placeholder="Name (e.g., Chicken)" value={mealName} onChange={e => setMealName(e.target.value)}  className="weight-input" disabled={loading} />
        <input type="number" placeholder="Calories (kcal)"       value={calories} onChange={e => setCalories(e.target.value)}  className="weight-input" disabled={loading} />
        <div className="macros-row">
          <input type="number" placeholder="P (g)" value={protein} onChange={e => setProtein(e.target.value)} className="weight-input" disabled={loading} />
          <input type="number" placeholder="F (g)" value={fat}     onChange={e => setFat(e.target.value)}     className="weight-input" disabled={loading} />
          <input type="number" placeholder="C (g)" value={carbs}   onChange={e => setCarbs(e.target.value)}   className="weight-input" disabled={loading} />
        </div>
        <select value={category} onChange={e => setCategory(e.target.value)} className="weight-input" disabled={loading}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
        <button type="submit" className="my-btn" disabled={loading}>
          {loading ? 'Saving...' : 'Add to Log'}
        </button>
      </form>

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />
    </div>
  );
};

export default MealForm;