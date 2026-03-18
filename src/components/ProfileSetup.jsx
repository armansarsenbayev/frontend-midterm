import React, { useState } from 'react';

const ProfileSetup = ({ onSaveProfile }) => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('1.2');
  const [goal, setGoal] = useState('0');

  const handleCalculate = (e) => {
    e.preventDefault();

    let bmr = (10 * Number(weight)) + (6.25 * Number(height)) - (5 * Number(age));
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;

    const tdee = bmr * Number(activity);
    const finalCalories = Math.round(tdee + Number(goal));

    const calculatedProfile = {
      calories: finalCalories,
      protein: Math.round((finalCalories * 0.3) / 4),
      fat: Math.round((finalCalories * 0.3) / 9),
      carbs: Math.round((finalCalories * 0.4) / 4),
      water: Math.round(Number(weight) * 30)
    };

    onSaveProfile(calculatedProfile);
  };

  return (
    <div className="card profile-setup">
      <h3>⚙️ Profile Setup</h3>
      <form onSubmit={handleCalculate}>
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="weight-input">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className="weight-input" required />
        <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} className="weight-input" required />
        <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="weight-input" required />
        <select value={activity} onChange={(e) => setActivity(e.target.value)} className="weight-input">
          <option value="1.2">Sedentary (Little to no exercise)</option>
          <option value="1.375">Lightly active (1-3 days/week)</option>
          <option value="1.55">Moderately active (3-5 days/week)</option>
          <option value="1.725">Very active (6-7 days/week)</option>
        </select>
        <select value={goal} onChange={(e) => setGoal(e.target.value)} className="weight-input">
          <option value="-500">Lose Weight</option>
          <option value="0">Maintain Weight</option>
          <option value="500">Gain Muscle</option>
        </select>
        <button type="submit" className="my-btn">Calculate Macros</button>
      </form>
    </div>
  );
};

export default ProfileSetup;