const BASE_URL = 'https://69f31e5abd2396bf530f6d7a.mockapi.io';


const handleResponse = async (response) => {
  if (!response.ok) {
    const message = `API error: ${response.status} ${response.statusText}`;
    throw new Error(message);
  }
  return response.json();
};


export const getMeals = async () => {
  const response = await fetch(`${BASE_URL}/meals`);
  return handleResponse(response);
};


export const createMeal = async (meal) => {
  const response = await fetch(`${BASE_URL}/meals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(meal),
  });
  return handleResponse(response);
};


export const deleteMealById = async (id) => {
  const response = await fetch(`${BASE_URL}/meals/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};


export const updateMeal = async (id, meal) => {
  const response = await fetch(`${BASE_URL}/meals/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(meal),
  });
  return handleResponse(response);
};
