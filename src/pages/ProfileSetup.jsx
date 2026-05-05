import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGoals } from '../redux/goalsSlice';
import { calculateGoals } from '../utils/tdee';  

const ProfileSetup = () => {
  const dispatch = useDispatch();

  const [gender,   setGender]   = useState('male');
  const [age,      setAge]      = useState('');
  const [height,   setHeight]   = useState('');
  const [weight,   setWeight]   = useState('');
  const [activity, setActivity] = useState(1.2);
  const [goal,     setGoal]     = useState(0);
  const [success,  setSuccess]  = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();

    
    const calculatedGoals = calculateGoals({
      gender,
      age:      Number(age),
      height:   Number(height),
      weight:   Number(weight),
      activity: Number(activity),
      goal:     Number(goal),
    });

    dispatch(setGoals(calculatedGoals));
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="card profile-setup">
      <h3>⚙️ Profile Setup</h3>

      {success && (
        <p style={{ color: '#20c997', textAlign: 'center', marginBottom: '10px' }}>
          ✅ Goals updated successfully!
        </p>
      )}

      <form onSubmit={handleCalculate}>
        <select value={gender} onChange={e => setGender(e.target.value)} className="weight-input">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="number" placeholder="Age"         value={age}    onChange={e => setAge(e.target.value)}    className="weight-input" required />
        <input type="number" placeholder="Height (cm)" value={height} onChange={e => setHeight(e.target.value)} className="weight-input" required />
        <input type="number" placeholder="Weight (kg)" value={weight} onChange={e => setWeight(e.target.value)} className="weight-input" required />
        <select value={activity} onChange={e => setActivity(e.target.value)} className="weight-input">
          <option value={1.2}>Sedentary (little to no exercise)</option>
          <option value={1.375}>Lightly active (1–3 days/week)</option>
          <option value={1.55}>Moderately active (3–5 days/week)</option>
          <option value={1.725}>Very active (6–7 days/week)</option>
        </select>
        <select value={goal} onChange={e => setGoal(e.target.value)} className="weight-input">
          <option value={-500}>Lose weight</option>
          <option value={0}>Maintain weight</option>
          <option value={500}>Gain muscle</option>
        </select>
        <button type="submit" className="my-btn">Calculate Macros</button>
      </form>
    </div>
  );
};

export default ProfileSetup;