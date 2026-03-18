import React, { useState } from 'react';
import ProfileSetup from './ProfileSetup';
import MacrosBoard from './MacrosBoard';
import WaterWidget from './WaterWidget';
import MealForm from './MealForm';
import MealList from './MealList';

const MainContent = () => {
  const [meals, setMeals] = useState([]);
  const [water, setWater] = useState(0);
  
  const [userGoals, setUserGoals] = useState({
    calories: 2000,
    protein: 150,
    fat: 65,
    carbs: 200,
    water: 2000
  });

  const handleSaveProfile = (calculatedProfile) => {
    setUserGoals(calculatedProfile);
  };

  const handleAddMeal = (newMeal) => {
    setMeals([...meals, newMeal]);
  };

  const handleDeleteMeal = (id) => {
    setMeals(meals.filter(meal => meal.id !== id));
  };

  const handleAddWater = (amount) => {
    setWater(water + amount);
  };

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const totalProtein = meals.reduce((sum, meal) => sum + meal.protein, 0);
  const totalFat = meals.reduce((sum, meal) => sum + meal.fat, 0);
  const totalCarbs = meals.reduce((sum, meal) => sum + meal.carbs, 0);

  const consumedMacros = {
    protein: totalProtein,
    fat: totalFat,
    carbs: totalCarbs
  };

  return (
    <main className="main-content">
      <h2>Calorie & Water Tracker</h2>
      <p>Set your parameters and track your progress every day.</p>
      
      <div className="dashboard-grid">
        <div className="grid-left">
          <ProfileSetup onSaveProfile={handleSaveProfile} />
          <MealForm onAddMeal={handleAddMeal} />
          <MealList meals={meals} onDeleteMeal={handleDeleteMeal} />
        </div>

        <div className="grid-right">
          <MacrosBoard 
            consumedCalories={totalCalories} 
            goalCalories={userGoals.calories}
            consumedMacros={consumedMacros}
            goalMacros={userGoals}
          />
          <WaterWidget currentWater={water} goal={userGoals.water} onAddWater={handleAddWater} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;