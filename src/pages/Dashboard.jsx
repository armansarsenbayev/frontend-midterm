import React from 'react';
import { useSelector } from 'react-redux';
import MacrosBoard from '../components/MacrosBoard';
import WaterWidget from '../components/WaterWidget';
import useMeals from '../hooks/useMeals';

const Dashboard = () => {
  const { totalCalories, totalProtein, totalFat, totalCarbs } = useMeals();
  const water = useSelector(state => state.water.amount);
  const goals = useSelector(state => state.goals);

  const consumedMacros = {
    protein: totalProtein,
    fat:     totalFat,
    carbs:   totalCarbs,
  };

  return (
    <div className="dashboard-container">
      <div className="title-section">
        <h2>Dashboard</h2>
        <p>Track your daily progress</p>
      </div>
      <MacrosBoard
        consumedCalories={totalCalories}
        goalCalories={goals.calories}
        consumedMacros={consumedMacros}
        goalMacros={goals}
      />
      <WaterWidget
        currentWater={water}
        goal={goals.water}
      />
    </div>
  );
};

export default Dashboard;