
export const calculateBMR = ({ gender, weight, height, age }) => {
  const base = (10 * weight) + (6.25 * height) - (5 * age);
  return gender === 'male' ? base + 5 : base - 161;
};


export const calculateTDEE = (bmr, activityLevel) => {
  return bmr * activityLevel;
};


export const calculateMacros = (calories, weightKg) => {
  return {
    calories: Math.round(calories),
    protein:  Math.round((calories * 0.3) / 4),
    fat:      Math.round((calories * 0.3) / 9),
    carbs:    Math.round((calories * 0.4) / 4),
    water:    Math.round(weightKg * 30),
  };
};

export const calculateGoals = ({ gender, age, height, weight, activity, goal }) => {
  const bmr  = calculateBMR({ gender, weight, height, age });
  const tdee = calculateTDEE(bmr, activity);
  return calculateMacros(tdee + goal, weight);
};
