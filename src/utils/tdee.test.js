import { calculateBMR, calculateTDEE, calculateMacros, calculateGoals } from './tdee';

describe('calculateBMR', () => {
  test('calculates BMR for male correctly', () => {
    const result = calculateBMR({ gender: 'male', weight: 80, height: 180, age: 25 });
    
    expect(result).toBe(1805);
  });

  test('calculates BMR for female correctly', () => {
    const result = calculateBMR({ gender: 'female', weight: 60, height: 165, age: 30 });
    
    expect(result).toBe(1320.25);
  });
});

describe('calculateTDEE', () => {
  test('multiplies BMR by activity level', () => {
    expect(calculateTDEE(1800, 1.2)).toBe(2160);
    expect(calculateTDEE(1800, 1.55)).toBeCloseTo(2790);
  });
});

describe('calculateMacros', () => {
  test('returns correct macro split for 2000 kcal', () => {
    const result = calculateMacros(2000, 80);
    expect(result.calories).toBe(2000);
    expect(result.protein).toBe(150);  
    expect(result.fat).toBe(67);       
    expect(result.carbs).toBe(200);    
    expect(result.water).toBe(2400);   
  });
});

describe('calculateGoals', () => {
  test('returns goals object with all required keys', () => {
    const result = calculateGoals({
      gender: 'male', age: 25, height: 180,
      weight: 80, activity: 1.2, goal: 0
    });
    expect(result).toHaveProperty('calories');
    expect(result).toHaveProperty('protein');
    expect(result).toHaveProperty('fat');
    expect(result).toHaveProperty('carbs');
    expect(result).toHaveProperty('water');
  });

  test('goal +500 increases calories', () => {
    const maintain = calculateGoals({ gender: 'male', age: 25, height: 180, weight: 80, activity: 1.2, goal: 0 });
    const gain     = calculateGoals({ gender: 'male', age: 25, height: 180, weight: 80, activity: 1.2, goal: 500 });
    expect(gain.calories).toBeGreaterThan(maintain.calories);
  });
});
