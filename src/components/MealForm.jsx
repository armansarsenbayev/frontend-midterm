import React, { useState } from 'react';

const MealForm = ({ onAddMeal }) => {
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [carbs, setCarbs] = useState('');
  const [category, setCategory] = useState('Breakfast');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mealName.trim() || !calories) {
      setError('❌ Please fill in the name and calories!');
      return;
    }
    if (calories <= 0) {
      setError('❌ Calories must be greater than zero!');
      return;
    }

    const newMeal = {
      id: Date.now(),
      name: mealName,
      calories: Number(calories),
      protein: Number(protein) || 0,
      fat: Number(fat) || 0,
      carbs: Number(carbs) || 0,
      category: category
    };

    onAddMeal(newMeal);

    setMealName('');
    setCalories('');
    setProtein('');
    setFat('');
    setCarbs('');
    setCategory('Breakfast');
    setError('');
  };

  return (
    <div className="card meal-form-container">
      <h3>➕ Add Meal</h3>
      
      {error && <p style={{ color: '#ff4d4f', fontSize: '0.9rem', marginBottom: '10px' }}>{error}</p>}

      <form onSubmit={handleSubmit} className="meal-form" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Name (e.g., Chicken)" value={mealName} onChange={(e) => setMealName(e.target.value)} className="weight-input" />
        <input type="number" placeholder="Calories (kcal)" value={calories} onChange={(e) => setCalories(e.target.value)} className="weight-input" />
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="number" placeholder="Protein (g)" value={protein} onChange={(e) => setProtein(e.target.value)} className="weight-input" style={{ flex: 1 }} />
          <input type="number" placeholder="Fat (g)" value={fat} onChange={(e) => setFat(e.target.value)} className="weight-input" style={{ flex: 1 }} />
          <input type="number" placeholder="Carbs (g)" value={carbs} onChange={(e) => setCarbs(e.target.value)} className="weight-input" style={{ flex: 1 }} />
        </div>

        <select value={category} onChange={(e) => setCategory(e.target.value)} className="weight-input">
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>

        <button type="submit" className="my-btn" style={{ marginTop: '10px' }}>
          Add to Log
        </button>
      </form>
    </div>
  );
};

export default MealForm;