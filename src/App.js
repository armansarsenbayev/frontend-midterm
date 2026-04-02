import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Diary from './components/Diary';
import MealList from './components/MealList';
import MealForm from './components/MealForm';
import ProfileSetup from './components/ProfileSetup';
import About from './components/About';
import './App.css';

const App = () => {
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
    <BrowserRouter>
      <Header />
      <main className="main-content">
        <Routes>
          
          <Route path="/" element={
            <Dashboard 
              consumedCalories={totalCalories} 
              goalCalories={userGoals.calories}
              consumedMacros={consumedMacros}
              goalMacros={userGoals}
              water={water}
              onAddWater={handleAddWater}
            />
          } />
          
          <Route path="/diary" element={<Diary />}>
            <Route path="list" element={<MealList meals={meals} onDeleteMeal={handleDeleteMeal} />} />
            <Route path="add" element={<MealForm onAddMeal={handleAddMeal} />} />
          </Route>

          <Route path="/settings" element={
            <div className="dashboard-container">
              <div className="title-section">
                <h2>Settings</h2>
                <p>Update your body metrics</p>
              </div>
              <ProfileSetup onSaveProfile={handleSaveProfile} />
            </div>
          } />

          <Route path="/about" element={<About />} />

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;