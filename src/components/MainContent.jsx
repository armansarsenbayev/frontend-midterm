import React, { useState } from 'react';
import ProfileSetup from './ProfileSetup';
import MacrosBoard from './MacrosBoard';
import WaterWidget from './WaterWidget';
import MealForm from './MealForm';
import MealList from './MealList';

const MainContent = () => {
  const [meals, setMeals] = useState([]);

  const handleAddMeal = (newMeal) => {
    setMeals([...meals, newMeal]);
  };

  const handleDeleteMeal = (id) => {
    setMeals(meals.filter(meal => meal.id !== id));
  };

  return (
    <main className="main-content">
      <h2>Calorie & Water Tracker</h2>
      <p>Set your parameters and track your progress every day.</p>
      
      <div className="dashboard-grid">
        <div className="grid-left">
          <ProfileSetup />
          <MealForm onAddMeal={handleAddMeal} />
          <MealList meals={meals} onDeleteMeal={handleDeleteMeal} />
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