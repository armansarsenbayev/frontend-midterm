import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeals } from '../redux/mealsSlice';


const useMeals = () => {
  const dispatch = useDispatch();
  const meals   = useSelector(state => state.meals.items);
  const loading = useSelector(state => state.meals.loading);
  const error   = useSelector(state => state.meals.error);

  useEffect(() => {
    
    
    if (meals.length === 0) {
      dispatch(fetchMeals());
    }

    
    
    return () => {
      
    };
  }, [dispatch]); 

  
  const totalCalories = meals.reduce((sum, m) => sum + Number(m.calories), 0);
  const totalProtein  = meals.reduce((sum, m) => sum + Number(m.protein),  0);
  const totalFat      = meals.reduce((sum, m) => sum + Number(m.fat),      0);
  const totalCarbs    = meals.reduce((sum, m) => sum + Number(m.carbs),    0);

  return {
    meals,
    loading,
    error,
    totalCalories,
    totalProtein,
    totalFat,
    totalCarbs,
  };
};

export default useMeals;
